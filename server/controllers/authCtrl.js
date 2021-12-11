const Users = require('../models/userModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const sendMail = require('./sendMail');
const { createActivationToken, createRefreshToken } = require('./createToken');

const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const fetch = require('node-fetch');

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

const { CLIENT_URL } = process.env;

const authCtrl = {
    register: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            if (!username || !email || !password)
                return res
                    .status(400)
                    .json({ msg: 'Please fill in all fields.' });

            if (!validateEmail(email))
                return res.status(400).json({ msg: 'Invalid emails.' });

            if (password.length < 6)
                return res
                    .status(400)
                    .json({ msg: 'Password must be at least 6 character.' });

            const user = await Users.findOne({ email });
            if (user)
                return res
                    .status(400)
                    .json({ msg: 'This email already exists.' });

            const passwordHash = CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString();

            const newUser = { username, email, password: passwordHash };

            const activation_token = createActivationToken(newUser);

            const url = `${CLIENT_URL}/auth/activate/${activation_token}`;
            sendMail(email, url, 'Verify your email address');

            res.status(200).json({
                msg: 'Register Success! Please activate your email to start.',
            });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    activateEmail: async (req, res) => {
        try {
            const user = req.user;

            const { username, email, password } = user;

            const check = await Users.findOne({ email });
            if (check)
                return res
                    .status(400)
                    .json({ msg: 'This email already exists.' });

            const newUser = new Users({
                username,
                email,
                password,
            });

            await newUser.save();

            res.status(200).json({ msg: 'Account has been activated!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await Users.findOne({ email });
            if (!user)
                return res.status(401).json({ msg: 'Wrong credentials!' });

            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );

            const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            if (OriginalPassword !== password)
                return res.status(401).json({ msg: 'Wrong credentials!' });

            const refresh_token = createRefreshToken({
                id: user._id,
                isAdmin: user.isAdmin,
            });
            res.cookie('refresh_token', refresh_token, {
                httpOnly: true,
                path: '/api/user/refresh_token',
                maxAge: 1 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({ msg: 'Login successful!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    googleLogin: async (req, res) => {
        try {
            const { tokenId } = req.body;

            const verify = await client.verifyIdToken({
                idToken: tokenId,
                audience: process.env.MAILING_SERVICE_CLIENT_ID,
            });

            const { email_verified, email, name, picture } = verify.payload;

            const password = email + process.env.GOOGLE_SECRET;

            const passwordHash = CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString();

            if (!email_verified)
                return res
                    .status(400)
                    .json({ msg: 'Email verification failed.' });

            const user = await Users.findOne({ email });

            if (user) {
                const hashedPassword = CryptoJS.AES.decrypt(
                    user.password,
                    process.env.PASS_SEC
                );

                const OriginalPassword = hashedPassword.toString(
                    CryptoJS.enc.Utf8
                );
                if (OriginalPassword !== password)
                    return res.status(401).json({ msg: 'Wrong credentials!' });

                const refresh_token = createRefreshToken({
                    id: user._id,
                    isAdmin: user.isAdmin,
                });
                res.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    path: '/api/user/refresh_token',
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });

                res.status(200).json({ msg: 'Login successful!' });
            } else {
                const newUser = new Users({
                    username: name,
                    email,
                    password: passwordHash,
                    avatar: picture,
                });

                await newUser.save();

                const refresh_token = createRefreshToken({
                    id: newUser._id,
                    isAdmin: newUser.isAdmin,
                });
                res.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    path: '/api/user/refresh_token',
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });

                res.status(200).json({ msg: 'Login successful!' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    facebookLogin: async (req, res) => {
        try {
            const { accessToken, userID } = req.body;

            const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=id,name,email,picture&access_token=${accessToken}`;

            const data = await fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    return res;
                });

            const { name, email, picture } = data;

            const password = email + process.env.FACEBOOK_SECRET;

            const passwordHash = CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString();

            const user = await Users.findOne({ email });

            if (user) {
                const hashedPassword = CryptoJS.AES.decrypt(
                    user.password,
                    process.env.PASS_SEC
                );

                const OriginalPassword = hashedPassword.toString(
                    CryptoJS.enc.Utf8
                );
                if (OriginalPassword !== password)
                    return res.status(401).json({ msg: 'Wrong credentials!' });

                const refresh_token = createRefreshToken({
                    id: user._id,
                    isAdmin: user.isAdmin,
                });
                res.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    path: '/api/user/refresh_token',
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });

                res.status(200).json({ msg: 'Login successful!' });
            } else {
                const newUser = new Users({
                    username: name,
                    email,
                    password: passwordHash,
                    avatar: picture.data.url,
                });

                await newUser.save();

                const refresh_token = createRefreshToken({ id: newUser._id });
                res.cookie('refresh_token', refresh_token, {
                    httpOnly: true,
                    path: '/api/user/refresh_token',
                    maxAge: 3 * 24 * 60 * 60 * 1000,
                });

                res.json({ msg: 'Login success!' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = authCtrl;
