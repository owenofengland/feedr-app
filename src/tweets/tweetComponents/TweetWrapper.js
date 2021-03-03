import React from 'react';

const TweetWrapper = (props) => {
    return(
        <div className="tweet-body">
            {props.children}
        </div>
    )
}

export default TweetWrapper;