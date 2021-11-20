const router = require('express').Router();
const uploadImage = require('../middleware/uploadImage');
const uploadCtrl = require('../controllers/uploadCtrl');
const { verifyToken } = require('../middleware/verifyToken');

router.post(
    '/upload_avatar',
    verifyToken,
    uploadImage,
    uploadCtrl.uploadAvatar
);

module.exports = router;
