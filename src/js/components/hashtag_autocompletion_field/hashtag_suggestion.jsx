import React from 'react';

const HashtagSuggestion = (props) => {

    return (
        <div onClick={() => {props.onHashtagClick(props.suggestion)}}>
            {props.suggestion}
        </div>
    )
}

export default HashtagSuggestion;
