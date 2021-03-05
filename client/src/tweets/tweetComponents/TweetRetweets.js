import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

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
        <div 
            className="tweet-retweets"
            style={{color:color}}
            onClick={() => {
                props.onClick()
                changeColor()
                }
            }>
            <FontAwesomeIcon icon={faRetweet} fixedWidth/> {props.retweets}
        </div>
    );
};

export default TweetRetweets;