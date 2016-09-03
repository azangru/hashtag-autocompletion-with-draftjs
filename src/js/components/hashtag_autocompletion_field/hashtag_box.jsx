import React from 'react';
import HashtagSuggestion from './hashtag_suggestion';

const HashtagBox = (props) => {
    const suggestions = props.suggestions.map((suggestion, index) => (
        <HashtagSuggestion
            key={index}
            suggestion={suggestion}
            onHashtagClick={props.onHashtagClick}
            isFocused={props.focusedHashtagIndex === index}
        />
    ));

    return (
        <div style={props.style}>
            {suggestions}
        </div>
    );
};

export default HashtagBox;
