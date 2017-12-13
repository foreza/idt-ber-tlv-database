// Created by Jason Chiu, 12/12/2017

// Add dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('localhost/idt-ber-tlv');

// Configure data models
var TLV = require("./app/models/tlv");

// Configuring body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Configure port for server
var port = process.env.PORT || 8888;

// Define routes
const routes = require("./app/routes");

// Registering the routes is done here
app.use('/', routes);

// Serve any file in the /views directory.
app.use(express.static('app/views'));

// Listen on specified port
app.listen(port);

// DEBUG: Print
console.log("Application is now running on port " + port);
