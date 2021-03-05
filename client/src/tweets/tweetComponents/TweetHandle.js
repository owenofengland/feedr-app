import React from 'react';

const TweetHandle = (props) => {
    return (
        <div className="tweet-handle">
            @{props.handle}
        </div>
    )
}

export default TweetHandle;