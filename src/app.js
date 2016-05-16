'use strict';

var express = require('express');
var router = require('./api');
var parser = require('body-parser');


require('./database');
require('./seed'); // runs every time the application restarts

// setup middleware for server
var app = express();

app.use('/',express.static('public'));

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', router);


app.listen(3000, function () {
	console.log("Server is now running on port 3000")
});
