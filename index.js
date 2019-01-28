const http = require('http');
const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/bookstore',
    { useNewUrlParser: true }
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

app.use(express.static(path.join(__dirname, 'public/assets')));

app.use('/', require('./src/routes/index'));

http.createServer(app).listen(3000);