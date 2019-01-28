const express = require('express');

const Book = require('../models/Book');

const router = express.Router();

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

router.get('/books/:id', (req, res, next) => {
    console.log('getting one book');

    Book.findOne({
        _id: req.params.id,
    }).exec((err, result) => {
        if(err){
            res.send('The book wasn\'t found');
        }
        else{
            res.json(result);
        }
    });
});

router.post('/books', (req, res, next) => {
    console.log('Inserting book');

    let newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save((err, result) => {
        if(err){
            res.send('error saving book');
        }
        else{
            res.send(result);
        }
    });
});

router.get('/home', (req, res, next) => {
    res.render('home', null);
});

module.exports = router;