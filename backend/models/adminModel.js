const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const admin = mongoose.model('admin', adminSchema);

module.exports = admin