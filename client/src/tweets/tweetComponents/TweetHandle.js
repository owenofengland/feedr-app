import React from 'react';

const TweetHandle = (props) => {
    return (
        <div className="handle">
            @{props.handle}
        </div>
    )
}

export default TweetHandle;