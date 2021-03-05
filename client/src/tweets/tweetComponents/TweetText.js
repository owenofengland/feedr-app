import React from 'react';

const TweetText = (props) => {
    return(
        <div className="tweet-text">
            {props.text}
        </div>
    )
}

export default TweetText;
