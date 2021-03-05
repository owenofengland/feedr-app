import React, { useState } from 'react';

const TweetLikes = (props) => {

    const [color, setColor] = useState('white');

    const changeColor = () => {
        if (color === "white") {
            setColor("red");
        } else if (color === "red") {
            setColor("white");
        };
    };

    return(
        <button 
            className="tweet-likes"
            style={{backgroundColor:color}}
            onClick={() => {
                props.onClick()
                changeColor()
                }
            }>
            {props.likes} Likes
        </button>
    );
};

export default TweetLikes;