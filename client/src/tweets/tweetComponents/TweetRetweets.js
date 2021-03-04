import React from 'react';

const TweetRetweets = (props) => {
    return(
        <div className="tweet-retweets">
            {props.retweets}
        </div>
    )
}

export default TweetRetweets;