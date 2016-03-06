'use strict';

var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../../models/user');

router.post('/register', function (req, res) {
    User.model.findOne({ "username": req.body.username }, function (err, foundUser) {
        if (foundUser) {
            res.json({ "success": false, "message": "User already exists" });
        } else {
            User.create(req.body, function (err, user) {
                passport.authenticate('local')(req, res, function () {
                    res.json({ "success": req.isAuthenticated() });
                });
            });
        }
    });
});

module.exports = router;