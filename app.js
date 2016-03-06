'use strict';

var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var RedisStore = require('connect-redis')(session);

var app = express();

// DB Init

var db = require('./db');

// Cookie and Body Parsers

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());

// Session

app.use(session({
    store: new RedisStore({
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379
    }), 
    resave: false,
    saveUninitialized: false,
    secret: process.env.REDIS_SECRET || 'redissecret'
}));

app.use(passport.initialize());
app.use(passport.session());

// Passport Strategies

var User = require('./models/user');

passport.use(new passportLocal.Strategy(function (username, password, done) {
    User.findUser(username, password, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
    });
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Controllers

app.use(require('./controllers'));

// Server Start

var host = process.env.HOST || "http://127.0.0.1";
var port = process.env.PORT || 1337;

app.listen(port, function (params) {
    console.log("listening on " + host + ":" + port + "/");
});