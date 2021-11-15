const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token)
            return res.status(401).json({ msg: 'Invalid Authentication.' });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err)
                return res.status(403).json({ msg: 'Token Is Not Valid!' });

            req.user = user;
            next();
        });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

const verifyTokenAndAdmin = (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.isAdmin) {
                next();
            } else {
                return res
                    .status(403)
                    .json({ msg: 'You are not allowed to do that!' });
            }
        });
    } catch (error) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports = { verifyToken, verifyTokenAndAdmin };
