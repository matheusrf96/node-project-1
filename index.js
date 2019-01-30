const http = require('http');
const express = require('express');
const path = require('path');
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
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public/assets')));
app.use('/materialize', express.static(__dirname + '/node_modules/materialize-css/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))

app.use('/', require('./src/routes/index'));

http.createServer(app).listen(3000);