import React, {Component} from 'react';
import {Editor, EditorState, CompositeDecorator, ContentState, Entity} from 'draft-js';
import decorateComponentWithProps from './utils/decorate_component_with_props';
import decodeOffsetKey from './utils/decode_offset_key';
import HashtagWrapper from './hashtag_wrapper';

const callbacks = {
    updateCoordinates: (offsetKey, coordinates) => {
        console.log('updating coordinates')
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
        const contentState = ContentState.createFromText('hello #world, nice to meet you!');
        this.state = {editorState: EditorState.createWithContent(contentState, compositeDecorator)};
        this.onChange = this.onChange.bind(this);
        this.openPopover = this.openPopover.bind(this);
    }

    onChange(editorState) {
        // tag comment
        // let a = Entity;
        this.setState({editorState});


        // get the current selection
        const selection = editorState.getSelection();
        const anchorKey = selection.getAnchorKey();
        const anchorOffset = selection.getAnchorOffset();
    //    console.log('anchor offset', anchorOffset);

        const blockKey = selection.getAnchorKey();
        console.log('blockKey: ', blockKey, 'all keys', Object.keys(store.coordinates), 'tree', editorState.getBlockTree(blockKey), editorState.getBlockTree(blockKey).getIn([1, 'leaves', 0]));

        const block = editorState.getCurrentContent().getBlockForKey(blockKey);
        const blockText = block.getText();

        const offsetDetails = Object.keys(store.coordinates).map((offsetKey) => decodeOffsetKey(offsetKey));
        const leaves = offsetDetails
            .filter(({ blockKey }) => blockKey === anchorKey)
            .map(({ blockKey, decoratorKey, leafKey }) => (
                editorState
                    .getBlockTree(blockKey)
                    .getIn([decoratorKey, 'leaves', leafKey])
            ));
        const selectionIsInsideWord = leaves
            .filter((leaf) => leaf !== undefined)
            .map(({ start, end }) => (
                start === 0 && anchorOffset === 1 && anchorOffset <= end || // @ is the first character
                anchorOffset > start + 1 && anchorOffset <= end // @ is in the text or at the end
            ));
        console.log('selection inside word', selectionIsInsideWord);
        // this.activeOffsetKey = selectionIsInsideWord
        //     .filter(value => value === true)
        //     .keySeq()
        //     .first();
        // console.log('activeOffsetKey', this.activeOffsetKey);



        const currentWord = blockText.slice(0, anchorOffset).split(' ').pop();
        if (currentWord[0] === '#') {
            console.log('yes!');
            if (store.coordinates) {
                this.openPopover();
            }
        } else {
            this.closePopover();
        }
    }

    openPopover() {
        // styles.popover.top = store.coordinates.top + 15;
        // styles.popover.left = store.coordinates.left;
        // this.setState({displayPopover: true});
    }

    closePopover() {
        // this.setState({displayPopover: false});
    }

    render() {
        // передаем компоненту Editor stipPastedStyles=true, чтобы снимать форматирование с копипасты
        const {editorState} = this.state;
        return (
            <div>
                <h1>Test Page</h1>
                <div className="editor-container" style={styles.editorContainer}>
                    <Editor editorState={editorState} onChange={this.onChange} stripPastedStyles={true} />
                    { this.state.displayPopover ? (
                        <div style={styles.popover}></div>
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

// const HashtagSpan = (props) => {
//     return <span {...props} style={styles.hashtag}>{props.children}</span>;
// };
