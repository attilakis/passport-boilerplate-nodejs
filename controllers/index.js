'use strict';

var express = require('express');
var router = express.Router();

// AUTH

router.use('/auth', require('./auth'));

// USER

router.use('/user', require('./user'));

// API

router.use('/api/data', ensureAuthenticated, require('./api/data'));

// EnsureAuthenticated middleware

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;