import React from 'react';
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from 'react-js-pull-to-refresh';
import axios from 'axios';
import secrets from './secrets.js';
import Tweet from './tweets/Tweet.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets:[],
      requestUrl: "",
      errorMessage: "",
      errorCode: 0
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.getTweets = this.getTweets.bind(this);
  }

  handleRefresh() {
    return new Promise((resolve) => {
      this.getTweets();
    });
  }

  componentWillMount() {
    this.getTweets();
    
  }

  getTweets() {
    let tweetParams = secrets.usernames.twitter;
    let freshTweets = [];
    const url = `http://${secrets.api.hostname}:${secrets.api.port}/v1/twitter/home/${tweetParams}`;
    axios.get(url)
      .then(res => {
        const tweets = res.data;
        tweets.forEach(tweet => {
          freshTweets.push(tweet);
        });
        this.setState({
          tweets: freshTweets, ...this.state.tweets
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: err.message,
          errorCode: err.code
        });
      });
  }

  render() {
    return (
      <PullToRefresh
        pullDownContent={<PullDownContent/>}
        releaseContent={<ReleaseContent/>}
        refreshContent={<RefreshContent/>}
        pullDownThreshold={2}
        onRefresh={this.handleRefresh}
        triggerHeight={50}
        backgroundColor='white'>
        <div className="main-body">
          {[...this.state.tweets].map((tweet, index) => {
            let name = `${tweet.user.name}`
            let handle = `${tweet.user.screen_name}`
            let text = `${tweet.text}`;
            let image = `${tweet.user.profile_image_url}`;
            let likes = `${tweet.favorite_count}`;
            let retweets = `${tweet.retweet_count}`;
            let url = `https://twitter.com/${handle}/status/${tweet.id_str}`;
            return(
              <Tweet 
                key={index}
                name={name}
                handle={handle}
                text={text}
                image={image}
                likes={likes}
                retweets={retweets}
                url={url}/>
            )
          })}
        </div>
      </PullToRefresh>
    )
  }
}

export default App;