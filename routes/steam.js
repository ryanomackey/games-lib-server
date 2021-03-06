'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');
var SteamStrategy = require('passport-steam').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

router.use(passport.initialize());

passport.use(new SteamStrategy({
    returnURL: 'https://games-lib-server.herokuapp.com/steam/return',
    realm: 'https://games-lib-server.herokuapp.com',
    apiKey: process.env.STEAM
  },
  function(identifier, profile, done) {
    return done(null, profile);
  }
));

router.get('/', passport.authenticate('steam'));

router.get('/return',
  passport.authenticate('steam', { failureRedirect: 'https://games-lib.net' }),
  function(req, res) {
    // Successful authentication, redirect home.
    var steamId = req.session.passport.user.id;
    res.redirect('https://games-lib.net/#/' + '?steamImport=true&steamId=' + steamId);
  });

module.exports = router;
