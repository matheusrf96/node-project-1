const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.get('/', BookController.index);
// API
router.get('/api/books', BookController.listAll);
router.get('/api/books/:id', BookController.listOne);
router.post('/api/books', BookController.addBook);
router.put('/api/books/:id', BookController.updateBook);
// Pages
router.get('/books/list', BookController.listBooks);
router.get('/home', BookController.home);

module.exports = router;