'use strict';

var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../../models/user');

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.json({ "success": req.isAuthenticated() });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.json({ "success": !req.isAuthenticated() });
});

module.exports = router;