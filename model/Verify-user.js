const mongoose = require('mongoose');

const verify = new mongoose.Schema({
    token: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        default: () => Date.now(),
    },

    expire_at: { type: Date, default: Date.now, expires: 1800 }
});

module.exports = mongoose.model('VerifyUser', verify);