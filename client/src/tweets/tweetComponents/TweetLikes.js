import { faRProject } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

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
        <div 
            className="tweet-likes"
            style={{color:color}}
            onClick={() => {
                props.onClick()
                changeColor()
                }
            }>
            <FontAwesomeIcon icon={faHeart} fixedWidth/>{props.likes}
        </div>
    );
};

export default TweetLikes;