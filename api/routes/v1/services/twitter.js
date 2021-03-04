const express = require('express');

const twitter = require('../../../controllers/v1/twitter.js');

const routes = express.Router();

routes.get('/home/:screen_name', twitter.getTimeline);
routes.get('/user/:screen_name', twitter.getUsertweets);
routes.post('/like/:id', twitter.likeTweet);

module.exports = routes;