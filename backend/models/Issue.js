// models/Issue.js
const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    issueType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    lat: {
        type: Number,
        default: null,
    },
    lng: {
        type: Number,
        default: null,
    },
    image: {
        type: String,
        default: null, // Optional image
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Issue', issueSchema);

