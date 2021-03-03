import React from 'react';
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from 'react-js-pull-to-refresh';
import client from './utils/twitterApi.js';
import secrets from './secrets.js';
import Tweet from './tweets/Tweet.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets:[],
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
    client.get('statuses/home_timeline', tweetParams, (error, tweets, response) => {
      if(!error) {
        console.log('tweets loaded')
        tweets.forEach(tweet => {
          freshTweets.push(tweet)
        })
      }
      else {
        this.setState({
          errorMessage: error.message,
          errorCode: error.code
        })
      }
    });
    this.setState({
      tweets:freshTweets, ...this.state.tweets
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
        backgroundColor='black'>
        <div className="main-body">
          {[...this.state.tweets].map((tweet, index) => {
            let name = `${tweet.user.name}`
            let handle = `${tweet.user.screen_name}`
            let text = `${tweet.text}`;
            let image = `${tweet.user.profile_image_url}`;
            return(
              <Tweet 
                key={index}
                name={name}
                handle={handle}
                text={text}
                iamge={image}/>
            )
          })}
        </div>
      </PullToRefresh>
    )
  }
}

export default App;