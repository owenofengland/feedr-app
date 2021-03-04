import React from 'react';
import TweetWrapper from './tweetComponents/TweetWrapper.js';
import TweetText from './tweetComponents/TweetText.js';
import TweetName from './tweetComponents/TweetName.js';
import TweetImage from './tweetComponents/TweetImage.js';
import TweetHandle from './tweetComponents/TweetHandle.js';
import TweetLikes from './tweetComponents/TweetLikes.js';
import TweetRetweets from './tweetComponents/TweetRetweets.js';
import TweetURL from './tweetComponents/TweetURL.js';


const Tweet = (props) => {
    return(
        <TweetWrapper>
            <div className="inner-body">
                <span>
                    <TweetURL url={props.url}/>
                    <TweetImage image={props.image}/>
                </span>
                <div className="body">
                    <div className="inner-body">
                        <TweetName name={props.name}/>
                        <TweetHandle handle={props.handle}/>
                    </div>
                    <TweetText text={props.text}/>
                </div>
                <span>
                    <TweetLikes likes={props.likes}/>
                    <TweetRetweets retweets={props.retweets}/>             
                </span>
            </div>
        </TweetWrapper>
    )
}

export default Tweet;