const Users = require('../models/userModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const sendMail = require('./sendMail');
const { createActivationToken, createRefreshToken } = require('./createToken');

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

            const user = await Users.findOne({ email });
            if (user)
                return res
                    .status(400)
                    .json({ msg: 'This email already exists.' });

            if (password.length < 6)
                return res
                    .status(400)
                    .json({ msg: 'Password must be at least 6 character.' });

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
            const { activation_token } = req.body;
            const user = jwt.verify(
                activation_token,
                process.env.ACTIVATION_TOKEN_SECRET
            );

            const { username, email, password } = user;

            const check = await Users.findOne({ email });
            check &&
                res.status(400).json({ msg: 'This email already exists.' });

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
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.status(200).json({ msg: 'Login successful!' });
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
