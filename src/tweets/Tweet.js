import React from 'react';
import TweetWrapper from './tweetComponents/TweetWrapper.js';
import TweetText from './tweetComponents/TweetText.js';
import TweetName from './tweetComponents/TweetName.js';
import TweetImage from './tweetComponents/TweetImage.js';
import TweetHandle from './tweetComponents/TweetHandle.js';


const Tweet = (props) => {
    return(
        <TweetWrapper>
            <div className="inner-body">
                <TweetImage image={props.image}/>
                <div className="body">
                    <div className="inner-body">
                        <TweetName name={props.name}/>
                        <TweetHandle handle={props.handle}/>
                    </div>
                    <TweetText text={props.text}/>
                </div>
            </div>
        </TweetWrapper>
    )
}

export default Tweet;