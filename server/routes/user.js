const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const {
    verifyTokenRefreshToken,
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require('../middleware/verifyToken');

router.post('/refresh_token', verifyTokenRefreshToken, userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', verifyToken, userCtrl.resetPassword);

router.get('/find/:id', verifyTokenAndAuthorization, userCtrl.getUserInfo);

router.get('/', verifyTokenAndAdmin, userCtrl.getAllUserInfo);

router.get('/logout', userCtrl.logout);

router.put('/:id', verifyTokenAndAuthorization, userCtrl.updateUser);

router.delete('/:id', verifyTokenAndAuthorization, userCtrl.deleteUser);

module.exports = router;
