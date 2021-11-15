const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const {
    verifyToken,
    verifyTokenAndAdmin,
} = require('../middleware/verifyToken');

router.post('/refresh_token', userCtrl.getAccessToken);

router.post('/forgot', userCtrl.forgotPassword);

router.post('/reset', verifyToken, userCtrl.resetPassword);

router.get('/info', verifyToken, userCtrl.getUserInfo);

router.get('/all_info', verifyTokenAndAdmin, userCtrl.getAllUserInfo);

router.get('/logout', userCtrl.logout);

router.put('/update', verifyToken, userCtrl.updateUser);

router.delete('/delete/:id', verifyTokenAndAdmin, userCtrl.updateUser);

module.exports = router;
