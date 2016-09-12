import React from 'react';

const HashtagSuggestion = (props) => {

    return (
        <div
            onMouseDown={ () => props.onHashtagClick(props.suggestion) }
            className={props.isFocused ? 'hashtag-suggestion active' : 'hashtag-suggestion'}
        >
            {props.suggestion}
        </div>
    );
};

export default HashtagSuggestion;
