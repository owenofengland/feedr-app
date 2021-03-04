const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const v1 = require('./routes/v1/v1index.js');

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API route version mounting
app.use('/v1', v1);

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});

module.exports = app;