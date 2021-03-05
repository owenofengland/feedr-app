import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const TweetURL = (props) => {
    return(
        <div className="tweet-url">
            <a href={props.url}><FontAwesomeIcon size="2x" icon={faTwitter}/></a>
        </div>
    )
}

export default TweetURL;