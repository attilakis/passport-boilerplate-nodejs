'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  "username": String,
  "password": String,
  "createdAt": { "type": Date, "default": Date.now },
  "updatedAt": { "type": Date, "default": Date.now },
});

var User = mongoose.model('User', userSchema);

exports.model = User;

exports.create = function(json, cb) {
  var user = new User(json)
  user.save(function (err, user) {
    cb(err, user)
  });
}

exports.findUser = function(username, password, cb) {
    User.findOne({ "username": username, "password": password }, cb);
}