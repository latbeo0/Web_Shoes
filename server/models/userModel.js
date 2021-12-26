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
        default:
            'https://res.cloudinary.com/da3pohnlj/image/upload/v1637204419/user_1_kq1w6v.png',
    },
    addressShipping: {
        phone: {
            type: String,
            default: '',
        },
        province: {
            type: String,
            default: '',
        },
        district: {
            type: String,
            default: '',
        },
        ward: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
    },
});

module.exports = mongoose.model('Users', UserSchema);
