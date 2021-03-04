import React from 'react';

const TweetLikes = (props) => {
    return(
        <div className="tweet-likes">
            {props.likes}
        </div>
    )
}

export default TweetLikes;