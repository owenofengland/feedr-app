import React from 'react';

const TweetRetweets = (props) => {
    return(
        <button className="tweet-retweets" onClick={() => props.onClick()}>
            {props.retweets} Retweets
        </button>
    )
}

export default TweetRetweets;