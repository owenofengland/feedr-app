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
    this.likeTweet = this.likeTweet.bind(this);
    this.retweetTweet = this.retweetTweet.bind(this);
    this.cleanTime = this.cleanTime.bind(this);
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

  cleanTime(utcString) {
    const utcDate = new Date(utcString);
    const numToMonthMap = new Map([[1,"Jan"], [2,"Feb"], [3,"Mar"], [4,"Apr"], [5,"May"], [6,"Jun"], [7,"Jul"], [8,"Aug"], [9,"Sep"], [10,"Oct"], [11,"Nov"], [12, "Dec"]]);
    const localDate = `${numToMonthMap.get(utcDate.getMonth())} ${utcDate.getDate().toString()} ${utcDate.getHours().toString()}:${utcDate.getMinutes().toString()}`;
    return localDate;
  }

  likeTweet(tweetId, liked) {
    let url;
    if (!liked) {
      url = `http://${secrets.api.hostname}:${secrets.api.port}/v1/twitter/like/${tweetId}`;
    } else {
      url = `http://${secrets.api.hostname}:${secrets.api.port}/v1/twitter/unlike/${tweetId}`;
    }
    axios.post(url)
      .then(res => {
        console.log('success');
        console.log(res);
      })
      .catch(err => {
        console.log('failure');
        console.log(err);
      });
  }

  retweetTweet(tweetId, retweeted) {
    let url;
    if (!retweeted) {
      url = `https://${secrets.api.hostname}:${secrets.api.port}/v1/twitter/retweet/${tweetId}`;
    } else {
      url = `https://${secrets.api.hostname}:${secrets.api.port}/v1/twitter/unretweet/${tweetId}`;
    }
    axios.post(url)
      .then(res => {
        console.log('success');
        console.log(res);
      })
      .catch(err => {
        console.log('failure');
        console.log(err);
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
            let id = tweet.id_str;
            let date = this.cleanTime(tweet.created_at);
            let url = `https://twitter.com/${handle}/status/${tweet.id_str}`;
            return(
              <Tweet
                id={id} 
                key={index}
                name={name}
                handle={handle}
                text={text}
                image={image}
                likes={likes}
                retweets={retweets}
                date={date}
                url={url}
                likeTweet={this.likeTweet}
                retweetTweet={this.retweetTweet}/>
            )
          })}
        </div>
      </PullToRefresh>
    )
  }
}

export default App;