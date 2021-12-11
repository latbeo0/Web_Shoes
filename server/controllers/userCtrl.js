const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const sendMail = require('./sendMail');
const { createAccessToken } = require('./createToken');
const CryptoJS = require('crypto-js');

const { CLIENT_URL } = process.env;

const userCtrl = {
    getAccessToken: async (req, res) => {
        try {
            const user = req.user;

            const info = await Users.findOne({ _id: user.id });
            const {
                _id,
                username,
                avatar,
                isAdmin,
                email,
                phone,
                country,
                city,
                address,
            } = info._doc;

            const access_token = createAccessToken({
                id: user.id,
                isAdmin: user.isAdmin,
            });

            res.status(200).json({
                id: _id,
                username,
                avatar,
                isAdmin,
                email,
                phone,
                country,
                city,
                address,
                access_token,
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    forgotPassword: async (req, res) => {
        try {
            const { email } = req.body;
            const user = await Users.findOne({ email });
            if (!user)
                return res
                    .status(400)
                    .json({ msg: 'This email does not exist.' });

            const access_token = createAccessToken({ id: user._id });
            const url = `${CLIENT_URL}/user/reset/${access_token}`;

            sendMail(email, url, 'Reset your password');
            res.json({ msg: 'Re-send the password, please check your email.' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    resetPassword: async (req, res) => {
        try {
            const { password } = req.body;

            const passwordHash = CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString();

            await Users.findOneAndUpdate(
                { _id: req.user.id },
                {
                    password: passwordHash,
                }
            );

            res.json({ msg: 'Password successfully changed!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserInfo: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password');

            res.json(user);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getAllUserInfo: async (req, res) => {
        try {
            const users = await Users.find().select('-password');

            res.json(users);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refresh_token', {
                path: '/api/user/refresh_token',
            });

            return res.status(200).json({ msg: 'Logout Successful!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateUser: async (req, res) => {
        try {
            await Users.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $set: req.body,
                }
            );

            res.status(200).json({ msg: 'Update Successful!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await Users.findByIdAndDelete(req.params.id);

            res.status(200).json({ msg: 'Deleted Success!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

module.exports = userCtrl;
