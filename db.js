'use strict';

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/boilerplate');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('connected to mongo');
});