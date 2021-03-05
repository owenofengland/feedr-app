import React, {useState} from 'react';
import TweetWrapper from './tweetComponents/TweetWrapper.js';
import TweetText from './tweetComponents/TweetText.js';
import TweetName from './tweetComponents/TweetName.js';
import TweetImage from './tweetComponents/TweetImage.js';
import TweetHandle from './tweetComponents/TweetHandle.js';
import TweetLikes from './tweetComponents/TweetLikes.js';
import TweetRetweets from './tweetComponents/TweetRetweets.js';
import TweetURL from './tweetComponents/TweetURL.js';
import TweetTime from './tweetComponents/TweetTime.js';

const Tweet = (props) => {

    const [liked, setLiked] = useState(false);
    const [retweeted, setRetweeted] = useState(false);

    return(
        <TweetWrapper>
            <div className="inner-body">
                <span className="left-body">
                    <TweetURL url={props.url}/>
                    <TweetImage image={props.image}/>
                </span>
                <div className="body">
                    <div className="inner-body">
                        <TweetName name={props.name}/>
                        <TweetHandle handle={props.handle}/>
                        <TweetTime date={props.date}/>
                    </div>
                    <TweetText text={props.text}/>
                    <span className="bottom-body">
                    <TweetLikes 
                        likes={props.likes} 
                        onClick={() => {
                            props.likeTweet(props.id, liked);
                            setLiked(!liked);
                            }
                        }
                    />
                    <TweetRetweets 
                        retweets={props.retweets} 
                        onClick={() => {
                            props.retweetTweet(props.id, retweeted);
                            setRetweeted(!retweeted);
                            }
                        }
                    />             
                </span>
                </div>
            </div>
        </TweetWrapper>
    )
}

export default Tweet;