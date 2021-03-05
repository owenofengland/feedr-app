import React from 'react';

const TweetURL = (props) => {
    return(
        <div className="tweet-url">
            <a href={props.url}>Link to Tweet</a>
        </div>
    )
}

export default TweetURL;