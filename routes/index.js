const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello! :)');
});

router.get('/json', (req, res, next) => {
    const data = {
        key: 'Hello! :)',
    }

    res.json(data);
});

router.get('/home', (req, res, next) => {
    res.render('home', null);
});

module.exports = router;