const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

router.get('/', (req, res, next) => {
    res.send('Hello! :)');
});

router.get('/books', (req, res, next) => {
    console.log('getting all books');

    Book.find().exec((err, results) => {
        if(err){
            res.send('error');
        }
        else{
            res.json(results);
        }
    });
});

router.get('/home', (req, res, next) => {
    res.render('home', null);
});

module.exports = router;