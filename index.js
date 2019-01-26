const express = require('express');
const path = require('path');
const hoganMiddleware = require('hogan-middleware');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache');
app.engine('mustache', hoganMiddleware.__express);

app.get('/', (req, res, next) => {
    res.send('Hello! :)');
});

app.get('/json', (req, res, next) => {
    const data = {
        key: 'Hello! :)',
    }

    res.json(data);
});

app.get('/home', (req, res, next) => {
    res.render('home', null);
});

app.listen(3000);