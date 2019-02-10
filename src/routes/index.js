const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.get('/', BookController.home);
// API
router.get('/api/books', BookController.listAll);
router.get('/api/books/:id', BookController.listOne);
router.post('/api/books', BookController.addBook);
router.put('/api/books/:id', BookController.updateBook);
// Pages
router.get('/books/show', BookController.listBooks);
router.get('/books/show/:id', BookController.showDetails);

module.exports = router;