import React from 'react';

const TweetName = (props) => {
    return(
        <div className="tweet-name">
            {props.name}
        </div>
    )
}

export default TweetName;