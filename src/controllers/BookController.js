const mongoose = require('mongoose');
const Book = mongoose.model('Book');

module.exports = {
    async index(req, res){
        return res.send('Hello! :)');
    },

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

    async home(req, res){
        res.render('pages/home', { title: 'Matheus'});
    }
};