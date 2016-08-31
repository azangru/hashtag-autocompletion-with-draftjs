import decodeOffsetKey from './decode_offset_key';

const locateHashtagInText = (editorState, store) => {

    // get the current selection
    const selection = editorState.getSelection();
    const anchorOffset = selection.getAnchorOffset();
    const blockKey = selection.getAnchorKey();
    // console.log('blockKey: ', blockKey, 'all keys', Object.keys(store.coordinates), 'tree', editorState.getBlockTree(blockKey), editorState.getBlockTree(blockKey).getIn([1, 'leaves', 0]));
    const block = editorState.getCurrentContent().getBlockForKey(blockKey);
    const blockText = block.getText();

    // A text block is represented in Draft.js as a tree of nodes. Hashtags are wrapped
    // in decorating spans identified by unique keys. These spans essentially represent
    // nodes of the text block tree. The code below retrieves the start and end positions
    // of the hashtag in the text block, as well as the text of the hashtag itself
    const expandedKeys = Object.keys(store.hashtagsInText).map((key) => (
        {originalKey: key, decodedKey: decodeOffsetKey(key)}
    ));
    const expandedKeysWithHashtagRangesInBlock = expandedKeys
        // leaving only those nodes (spans) that are in the same text block as the caret
        .filter((obj) => obj.decodedKey.blockKey === blockKey)
        // getting
        .map((obj) => {
            const {blockKey, decoratorKey, leafKey} = obj.decodedKey;
            obj.leaf = editorState
                .getBlockTree(blockKey)
                .getIn([decoratorKey, 'leaves', leafKey]);
            return obj;
        });
    const completeHashtagInfo = expandedKeysWithHashtagRangesInBlock
        // filtering out junk (guarding against potential errors during the next step)
        .filter(({leaf}) => leaf !== undefined)
        // focusing on only one range whose start position is before the caret’s position
        // (which is the same as anchorOffset) and whose end position is at the caret’s position
        // or after it (meaning that the caret is inside this hashtag text range)
        .filter((obj) => {
            const { start, end } = obj.leaf;
            return start === 0 && anchorOffset === 1 && anchorOffset <= end || // hash is the first character
            anchorOffset > start + 1 && anchorOffset <= end; // hash is in the text or at the end
        })
        // transfer all information about the hashtag from the text range record onto the object
        .map((obj) => {
            const { start, end } = obj.leaf;
            const search = blockText.slice(start + 1, end);
            obj.start = start;
            obj.end = end;
            obj.search = search;
            return obj;
        })[0]; // and finally, getting out the object with all the relevant information about the hashtag

    return completeHashtagInfo;
};

export default locateHashtagInText;
