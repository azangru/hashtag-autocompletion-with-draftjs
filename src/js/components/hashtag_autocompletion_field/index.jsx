import React, {Component} from 'react';
import {Editor, EditorState, CompositeDecorator, ContentState} from 'draft-js';
import decorateComponentWithProps from './utils/decorate_component_with_props';
import getAutocompleteSuggestions from './utils/getAutocompleteSuggestions';
import insertHashtag from './utils/insert_hashtag';
import locateHashtagInText from './utils/locate_hashtag_in_text';
import HashtagWrapper from './hashtag_wrapper';
import HashtagBox from './hashtag_box';

const callbacks = {
    updateCoordinates: (offsetKey, coordinates) => {
        console.log('updating coordinates', coordinates);
        store.hashtagsInText[offsetKey] = {coordinates};
    }
};

const store = {
    // a dictionary of hashtags, by their block keys
    hashtagsInText: {}
};

const hashtagWrapperProps = {
    updateCoordinates: callbacks.updateCoordinates
};


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
            focusedHashtagIndex: 0,
            styles: styles
        };
        this.onChange = this.onChange.bind(this);
        this.openPopover = this.openPopover.bind(this);
        this.onHashtagClick = this.onHashtagClick.bind(this);
        this.onDownArrow = this.onDownArrow.bind(this);
        this.onUpArrow = this.onUpArrow.bind(this);
        this.onEnter = this.onEnter.bind(this);
    }

    onChange(editorState) {
        this.setState({editorState});
        // this.setState({content: editorState.getCurrentContent().getPlainText()})

        const hashtagInfo = locateHashtagInText(editorState, store);
        this.hashtagInfo = hashtagInfo;

        if (hashtagInfo && store.hashtagsInText[hashtagInfo.originalKey]) {
            getAutocompleteSuggestions(hashtagInfo.search).then((data) => {
                return this.openPopover(data[1], hashtagInfo.originalKey);
            });
        } else {
            this.closePopover();
        }
    }

    openPopover(suggestions, key) {
        const currentStyles = this.state.styles;
        const popoverStyles = currentStyles.popover;
        popoverStyles.top = store.hashtagsInText[key].coordinates.top + 15;
        popoverStyles.left = store.hashtagsInText[key].coordinates.left;
        const updatedStyles = Object.assign({}, currentStyles, {popover: popoverStyles});

        this.setState({
            displayPopover: true,
            autocompleteSuggestions: suggestions,
            focusedHashtagIndex: 0,
            styles: updatedStyles
        });
    }

    closePopover() {
        this.setState({displayPopover: false});
    }

    onHashtagClick(fullHashtag) {
        const newEditorState = insertHashtag(fullHashtag, this.hashtagInfo, this.state.editorState);
        this.setState({editorState: newEditorState});
    }

    onUpArrow(keyboardEvent) {
      keyboardEvent.preventDefault();
      if (this.state.focusedHashtagIndex - 1 < 0) {
            this.setState({focusedHashtagIndex: this.state.autocompleteSuggestions.length - 1});
      } else {
          this.setState({focusedHashtagIndex: (this.state.focusedHashtagIndex - 1) % this.state.autocompleteSuggestions.length});
      }
    }

    onDownArrow(keyboardEvent) {
      keyboardEvent.preventDefault();
      this.setState({focusedHashtagIndex: (this.state.focusedHashtagIndex + 1) % this.state.autocompleteSuggestions.length});
    }

    onEnter(keyboardEvent) {
        keyboardEvent.preventDefault();
        const selectedHashtag = this.state.autocompleteSuggestions[this.state.focusedHashtagIndex];
        const newEditorState = insertHashtag(selectedHashtag, this.hashtagInfo, this.state.editorState);
        this.setState({
            editorState: newEditorState,
            displayPopover: false
        });
        return true;
    }

    render() {
        // передаем компоненту Editor stipPastedStyles=true, чтобы снимать форматирование с копипасты
        const {editorState} = this.state;
        const popoverStyles = Object.assign({}, this.state.styles.popover);

        const additionalProps = (() => {
            if (this.state.displayPopover) {
                return {
                    onDownArrow: this.onDownArrow,
                    onUpArrow: this.onUpArrow,
                    handleReturn: this.onEnter
                };
            } else {
                return {
                    onDownArrow: undefined,
                    onUpArrow: undefined,
                    handleReturn: undefined
                };
            }
        })();

        return (
            <div>
                <h1>Test Page</h1>
                <div className="editor-container" style={styles.editorContainer}>
                    <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        stripPastedStyles={true}
                        {... additionalProps}
                    />
                    { this.state.displayPopover ? (
                        <HashtagBox
                            style={popoverStyles}
                            suggestions={this.state.autocompleteSuggestions}
                            onHashtagClick={this.onHashtagClick}
                            focusedHashtagIndex={this.state.focusedHashtagIndex}
                         />
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
        background: 'white',
        border: '1px solid black',
        // padding: '6px'
    },
};
