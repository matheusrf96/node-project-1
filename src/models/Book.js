const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        requried: true
    },
    published: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Book', BookSchema);