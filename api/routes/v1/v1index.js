const express = require('express');

const twitter = require('./services/twitter.js');

const routes = express.Router();

routes.use("/twitter", twitter);

module.exports = routes;