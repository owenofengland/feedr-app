import React from 'react';

const TweetImage = (props) => {
    return(
        <img src={props.image} alt="Logo" className="tweet-image"/>
    )
}

export default TweetImage;