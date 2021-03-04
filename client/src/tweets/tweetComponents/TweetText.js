import React from 'react';

const TweetText = (props) => {
    return(
        <div className="tweet">
            {props.text}
        </div>
    )
}

export default TweetText;
