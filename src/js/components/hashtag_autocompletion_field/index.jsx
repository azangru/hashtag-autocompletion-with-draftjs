import React, {Component} from 'react';
import {Editor, EditorState, Entity} from 'draft-js';

export default class DescriptionField extends Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = this.onChange.bind(this);
    }

    onChange(editorState) {
        // tag comment
        let a = Entity;
        this.setState({editorState});
            this.setState({content: editorState.getCurrentContent().getPlainText()})


        // get the current selection
       const selection = editorState.getSelection();
       const anchorKey = selection.getAnchorKey();
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
