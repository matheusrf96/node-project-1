const http = require('http');
const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/bookstore',
    { useNewUrlParser: true }
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

app.use(express.static(path.join(__dirname, 'public/assets')));

const router = require('./src/routes/index');

const Book = require('./src/models/Book');

app.use('/', router);

http.createServer(app).listen(3000);