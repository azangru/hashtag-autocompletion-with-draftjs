import React, {Component} from 'react';
import {Editor, EditorState, CompositeDecorator, ContentState, SelectionState} from 'draft-js';
import decorateComponentWithProps from './utils/decorate_component_with_props';
import getAutocompleteSuggestions from './utils/getAutocompleteSuggestions';
import insertHashtag from './utils/insert_hashtag';
import locateHashtagInText from './utils/locate_hashtag_in_text';
import HashtagWrapper from './hashtag_wrapper';
import HashtagBox from './hashtag_box';

const callbacks = {
    updateCoordinates: (offsetKey, coordinates) => {
        store.hashtagsInText[offsetKey] = {coordinates};
    }
};

const store = {
    // a dictionary of hashtags, by their block keys
    hashtagsInText: {},
    editorFocused: true,
    clickedOnHashtag: false
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
        this.onEscape = this.onEscape.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    componentDidUpdate () {
        if(store.clickedOnHashtag) {
            setTimeout(() => {
                // there is some black magic going on with asynchronous stuff,
                // so need to dump the following method to the end of the event loop
                this.refs.editor.focus();
            }, 0);
            store.clickedOnHashtag = false;
        }
    }

    onChange(editorState) {
        this.setState({editorState});

        const hashtagInfo = locateHashtagInText(editorState, store);
        this.hashtagInfo = hashtagInfo;

        // focusing on the editor will trigger two onChange events;
        // we need to discard the first one
        // otherwise the popover with autocomplete suggestions may show
        // when the user has focused on a hashtag, then leaves the editor,
        // then focuses on a non-hashtag word
        if (store.inTransitionToFocus) {
            store.inTransitionToFocus = false;
            return;
        }

        if (store.editorFocused &&
            hashtagInfo &&
            hashtagInfo.originalKey !== store.escapeKey &&
            store.hashtagsInText[hashtagInfo.originalKey]) {
                getAutocompleteSuggestions(hashtagInfo.search).then((data) => {
                    return this.openPopover(data, hashtagInfo.originalKey);
            });
        } else {
            !hashtagInfo && (store.escapeKey = undefined);
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
        store.clickedOnHashtag = true;
        store.clickedHashtag = fullHashtag;
        const newEditorState = insertHashtag(fullHashtag, this.hashtagInfo, this.state.editorState);
        this.setState({
            editorState: newEditorState,
        });
        store.editorFocused = true;
        this.closePopover();
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

    onEscape(keyboardEvent) {
        keyboardEvent && keyboardEvent.preventDefault();
        store.escapeKey = this.hashtagInfo.originalKey;
        this.closePopover();
    }

    // initially, tried to store the editorFocused property in the component’s state
    // by doing this.setState, but .setState() is asynchronous, so I chose a synchronous mechanism
    onBlur() {
        if (!store.clickedOnHashtag) {
            this.setState({
                displayPopover: false
            });
            store.editorFocused = false;
        }
    }

    onFocus() {
        store.editorFocused = true;
        store.inTransitionToFocus = true;
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
                    handleReturn: this.onEnter,
                    onEscape: this.onEscape,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                };
            } else {
                return {
                    onDownArrow: undefined,
                    onUpArrow: undefined,
                    handleReturn: undefined,
                    onEscape: undefined,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
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
                        ref="editor"
                    />
                    <HashtagBox
                        style={this.state.displayPopover ? popoverStyles : Object.assign({display: 'none'}, popoverStyles)}
                        suggestions={this.state.autocompleteSuggestions}
                        onHashtagClick={this.onHashtagClick}
                        focusedHashtagIndex={this.state.focusedHashtagIndex}
                     />
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
        border: '1px solid black'
    },
};
