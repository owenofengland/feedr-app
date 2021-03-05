import React, { useState } from 'react';

const TweetRetweets = (props) => {

    const [color, setColor] = useState('white');

    const changeColor = () => {
        if (color === "white"){
            setColor("green");
        } else if (color === "green") {
            setColor("white");
        };
    };
    
    return(
        <button 
            className="tweet-retweets"
            style={{backgroundColor:color}}
            onClick={() => {
                props.onClick()
                changeColor()
                }
            }>
            {props.retweets} Retweets
        </button>
    );
};

export default TweetRetweets;