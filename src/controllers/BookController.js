const mongoose = require('mongoose');
const Book = mongoose.model('Book');

function dFormat(d){
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/') +
            ' ' +
            [d.getHours(), d.getMinutes()].join(':');
}

module.exports = {
    // API
    async listAll(req, res){
        console.log('getting all books');

        Book.find().exec((err, results) => {
            if(err){
                return res.send('error');
            }
            else{
                return res.json(results);
            }
        });
    },

    async listOne(req, res){
        console.log('getting one book');

        Book.findOne({
            _id: req.params.id,
        }).exec((err, result) => {
            if(err){
                return res.send('The book wasn\'t found');
            }
            else{
                return res.json(result);
            }
        });
    },

    async addBook(req, res){
        console.log('Inserting book');

        let newBook = new Book();

        newBook.title = req.body.title;
        newBook.author = req.body.author;
        newBook.category = req.body.category;

        newBook.save((err, result) => {
            if(err){
                return res.send('error saving book');
            }
            else{
                return res.send(result);
            }
        });
    },

    async updateBook(req, res){
        console.log('Updating book');

        Book.findOneAndUpdate({
            _id: req.params.id
        },
        { $set: {
            title: req.body.title,
            author: req.body.author,
            category: req.body.category
        }},
        { new: true },
        (err, newBook) => {
            if(err){
                console.log('error updating');
            }
            else{
                return res.send(newBook);
            }
        });
    },

    // Pages
    async listBooks(req, res){
        path = req.path;

        Book.find().exec((err, results) => {
            if(err){
                return res.send('error');
            }
            else{
                let arrDates = [];

                for(let i = 0; i < results.length; i++){
                    arrDates.push(dFormat(results[i].published));
                }

                return res.render('pages/books-list', { books: results, dates: arrDates, path: path });
            }
        });
    },

    async showDetails(req, res){
        path = req.path;

        Book.findOne({
            _id: req.params.id,
        }).exec((err, result) => {
            if(err){
                return res.send('The book wasn\'t found');
            }
            else{
                return res.render('pages/book-details', { book: result, date: dFormat(result.published), path: path });
            }
        });
    },

    async home(req, res){
        path = req.path;

        return res.render('pages/home', { path: path });
    }
};