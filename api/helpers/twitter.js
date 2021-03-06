const secrets = require('../secrets.js');
const Twitter = require('twitter');


const client = new Twitter({
    consumer_key: secrets.twitter.consumer_key,
    consumer_secret: secrets.twitter.consumer_key_secret,
    access_token_key: secrets.twitter.access_token,
    access_token_secret: secrets.twitter.access_token_secret
})

module.exports = client;