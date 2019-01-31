const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.get('/', BookController.index);
router.get('/books', BookController.listAll);
router.get('/books/:id', BookController.listOne);
router.post('/books', BookController.addBook);
router.put('/books/:id', BookController.updateBook);
router.get('/home', BookController.home);

module.exports = router;