import React from 'react';

const TweetWrapper = (props) => {
    return(
        <div className="tweet-wrapper">
            {props.children}
        </div>
    )
}

export default TweetWrapper;