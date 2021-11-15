const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username!'],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email!'],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter your password!'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
        default: '',
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    phone: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Users', UserSchema);
