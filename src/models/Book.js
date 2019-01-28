const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    published: {
        type: Date,
        default: Date.now
    },
    keywords: Array,
    detail: {
        modelNumber: Number,
        hardcover: Boolean,
        reviews: Number,
        rank: Number
    }
});

module.exports = mongoose.model('Book', BookSchema);