import React, {Component} from 'react';
import {Editor, EditorState, CompositeDecorator, Entity} from 'draft-js';

export default class DescriptionField extends Component {

    constructor(props) {
        super(props);
        
        const compositeDecorator = new CompositeDecorator([
            {
              strategy: hashtagStrategy,
              component: HashtagSpan,
            },
          ]);
        
        this.state = {editorState: EditorState.createEmpty(compositeDecorator)};
        this.onChange = this.onChange.bind(this);
    }

    onChange(editorState) {
        // tag comment
        // let a = Entity;
        this.setState({editorState});
            this.setState({content: editorState.getCurrentContent().getPlainText()})


        // get the current selection
       const selection = editorState.getSelection();
    //    const anchorKey = selection.getAnchorKey();
       const anchorOffset = selection.getAnchorOffset();
    //    console.log('anchor offset', anchorOffset);

       const blockKey = selection.getAnchorKey();
       const block = editorState.getCurrentContent().getBlockForKey(blockKey);
       const blockText = block.getText();
       
       const currentWord = blockText.slice(0, anchorOffset).split(' ').pop();
       if (currentWord[0] === '#') {
           console.log('yes!');
       }
    }


    render() {

        const {editorState} = this.state;
        return (
            <div>
                <h1>Test Page</h1>
                <div className="editor-container">
                    <Editor editorState={editorState} onChange={this.onChange} />
                </div>
                <div style={{"whiteSpace": "pre-wrap"}}>{this.state.content}</div>
            </div>
        );
    }
    
}


const styles = {
  hashtag: {
    color: 'rgba(95, 184, 138, 1.0)',
  },
};

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

const HashtagSpan = (props) => {
    return <span {...props} style={styles.hashtag}>{props.children}</span>;
};
