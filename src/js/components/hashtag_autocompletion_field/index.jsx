import React, {Component} from 'react';
import {Editor, EditorState, CompositeDecorator, ContentState, Entity} from 'draft-js';
import decorateComponentWithProps from './utils/decorate_component_with_props';
import decodeOffsetKey from './utils/decode_offset_key';
import getAutocompleteSuggestions from './utils/getAutocompleteSuggestions';
import HashtagWrapper from './hashtag_wrapper';
import HashtagBox from './hashtag_box';

const callbacks = {
    updateCoordinates: (offsetKey, coordinates) => {
        console.log('updating coordinates', coordinates);
        store.coordinates[offsetKey] = coordinates;
    },
    getSearchText: () => {

    }
};

const store = {
    coordinates: {}
};

const hashtagWrapperProps = {
    updateCoordinates: callbacks.updateCoordinates
}


export default class DescriptionField extends Component {

    constructor(props) {
        super(props);

        const compositeDecorator = new CompositeDecorator([
            {
              strategy: hashtagStrategy,
              component: decorateComponentWithProps(HashtagWrapper, hashtagWrapperProps)
            },
          ]);

        // this.state = {editorState: EditorState.createEmpty(compositeDecorator)}; // если нет предварительного содержимого
        const contentState = ContentState.createFromText('hello #world, nice to meet you! #lol');
        this.state = {
            editorState: EditorState.createWithContent(contentState, compositeDecorator),
            autocompleteSuggestions: [],
            styles: styles
        };
        this.onChange = this.onChange.bind(this);
        this.openPopover = this.openPopover.bind(this);
    }

    onChange(editorState) {
        this.setState({editorState});
        this.setState({content: editorState.getCurrentContent().getPlainText()})


        // get the current selection
        const selection = editorState.getSelection();
        const anchorKey = selection.getAnchorKey();
        const anchorOffset = selection.getAnchorOffset();
    //    console.log('anchor offset', anchorOffset);

        const blockKey = selection.getAnchorKey();
        console.log('blockKey: ', blockKey, 'all keys', Object.keys(store.coordinates), 'tree', editorState.getBlockTree(blockKey), editorState.getBlockTree(blockKey).getIn([1, 'leaves', 0]));

        const block = editorState.getCurrentContent().getBlockForKey(blockKey);
        const blockText = block.getText();

        const offsetDetails = Object.keys(store.coordinates).map((offsetKey) => ({originalKey: offsetKey, decodedKey: decodeOffsetKey(offsetKey)}));
        const leaves = offsetDetails
            .filter((obj) => obj.decodedKey.blockKey === anchorKey)
            .map((obj) => {
                const {blockKey, decoratorKey, leafKey} = obj.decodedKey;
                obj.leaf = editorState
                    .getBlockTree(blockKey)
                    .getIn([decoratorKey, 'leaves', leafKey]);
                return obj;
            });
        const selectionIsInsideWord = leaves
            .filter(({leaf}) => leaf !== undefined)
            .filter((obj) => {
                const { start, end } = obj.leaf;
                return start === 0 && anchorOffset === 1 && anchorOffset <= end || // @ is the first character
                anchorOffset > start + 1 && anchorOffset <= end // @ is in the text or at the end
            })
            .map((obj) => {
                const { start, end } = obj.leaf;
                const search = blockText.slice(start + 1, end);
                console.log('search term', search);
                obj.search = search;
                return obj;
            });

        this.activeOffsetKey = selectionIsInsideWord[0] && selectionIsInsideWord[0].originalKey;


        const currentWord = blockText.slice(0, anchorOffset).split(' ').pop();
        if (currentWord[0] === '#') {
            if (store.coordinates[this.activeOffsetKey]) {
                console.log('yes!', this.activeOffsetKey);
                getAutocompleteSuggestions(selectionIsInsideWord[0].search).then((data) => {
                    return this.openPopover(data[1], this.activeOffsetKey)
                });
            }
        } else {
            this.closePopover();
        }
    }

    openPopover(suggestions, coordinatesKey) {
        const currentStyles = this.state.styles;
        const popoverStyles = currentStyles.popover;
        popoverStyles.top = store.coordinates[coordinatesKey].top + 15;
        popoverStyles.left = store.coordinates[coordinatesKey].left;
        const updatedStyles = Object.assign({}, currentStyles, {popover: popoverStyles});

        this.setState({
            displayPopover: true,
            autocompleteSuggestions: suggestions,
            styles: updatedStyles
        });
    }

    closePopover() {
        this.setState({displayPopover: false});
    }

    render() {

        const {editorState} = this.state;
        const popoverStyles = Object.assign({}, this.state.styles.popover);

        return (
            <div>
                <h1>Test Page</h1>
                <div className="editor-container" style={styles.editorContainer}>
                    <Editor editorState={editorState} onChange={this.onChange} openPopover={this.openPopover} />
                    { this.state.displayPopover ? (
                        <HashtagBox style={popoverStyles} suggestions={this.state.autocompleteSuggestions} />
                        ) : null
                    }
                </div>
                <div style={{"whiteSpace": "pre-wrap"}}>{this.state.content}</div>
            </div>
        );
    }

}


const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

function hashtagStrategy(contentBlock, callback) {
     findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index;
        callback(start, start + matchArr[0].length);
    }
}

const styles = {
    editorContainer: {
        position: 'relative'
    },
    popover: {
        position: 'absolute',
        background: 'yellow',
        width: '100px',
        height: '50px'
    },
};
