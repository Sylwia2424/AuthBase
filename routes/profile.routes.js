const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res) => {
  //req.logIn();
  res.render('profile');
});

router.get('/settings', (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
}); 

router.get('/user/profile/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/user/profile');

  }
);

module.exports = router;