import {EditorState, Modifier} from 'draft-js';

const insertHashtag = (fullHashtag, hashtagInfo, editorState) => {
    const contentState  = editorState.getCurrentContent();
    const selectionState = editorState.getSelection().merge({
        anchorOffset: hashtagInfo.start,
        focusOffset: hashtagInfo.end
    });
    const trimmedHashtag = fullHashtag.replace(/\s/g, ''); // because hashtags don't have spaces
    let replacedContent = Modifier.replaceText(contentState, selectionState, `#${trimmedHashtag} `);
    const newEditorState = EditorState.push(
        editorState,
        replacedContent,
        'insert-hashtag'
    );
    return EditorState.forceSelection(newEditorState, replacedContent.getSelectionAfter());
};


export default insertHashtag;
