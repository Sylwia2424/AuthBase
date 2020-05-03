const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('profile');
});

router.get('/settings', (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
}); 

module.exports = router;