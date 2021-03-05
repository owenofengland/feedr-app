import React from 'react';

const TweetLikes = (props) => {
    return(
        <button className="tweet-likes" onClick={() => props.onClick()}>
            {props.likes} Likes
        </button>
    )
}

export default TweetLikes;