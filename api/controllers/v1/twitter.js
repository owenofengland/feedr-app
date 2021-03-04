const client = require('../../helpers/twitter.js');

exports.getTimeline = (req, res) => {
    client.get('statuses/home_timeline', req.params, (error, tweets, response) => {
        if (!error) {
            res.status(200);
            res.json(tweets);
        } else {
            res.status(400);
            res.json(error);
        };
    });
};

exports.getUsertweets = (req, res) => {
    client.get('statuses/user_timeline', req.params, (error, tweets, response) => {
        if (!error) {
            res.status(200);
            res.json(tweets);
        } else {
            res.status(400);
            res.json(error);
        };
    });
};

exports.likeTweet = (req, res) => {
    client.post("favorites/create", req.params, (error, tweet, response) => {
        if (!error) {
            res.status(200);
            res.json(response);
        } else {
            res.status(400);
            res.json(error);
        }
    })
}