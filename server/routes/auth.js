const router = require('express').Router();
const authCtrl = require('../controllers/authCtrl');
const { verifyTokenActivation } = require('../middleware/verifyToken');

router.post('/register', authCtrl.register);

router.post('/activation', verifyTokenActivation, authCtrl.activateEmail);

router.post('/login', authCtrl.login);

// Social Login
router.post('/google_login', authCtrl.googleLogin);

router.post('/facebook_login', authCtrl.facebookLogin);

module.exports = router;
