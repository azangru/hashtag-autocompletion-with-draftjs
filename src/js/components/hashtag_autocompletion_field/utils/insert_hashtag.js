import {EditorState, Modifier} from 'draft-js';

const insertHashtag = (fullHashtag, hashtagInfo, editorState) => {
    const contentState  = editorState.getCurrentContent();
    const selectionState = editorState.getSelection().merge({
        anchorOffset: hashtagInfo.start,
        focusOffset: hashtagInfo.end
    });
    let replacedContent = Modifier.replaceText(contentState, selectionState, `#${fullHashtag}`);
    const newEditorState = EditorState.push(
        editorState,
        replacedContent,
        'insert-hashtag'
    );
    return EditorState.forceSelection(newEditorState, selectionState);
};


export default insertHashtag;
