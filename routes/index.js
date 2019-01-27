const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello! :)');
});

router.get('/request/:path', (req, res, next) => {
    const path = req.params.path;

    const data = {
        key: path,
    }

    res.json(data);
});

router.get('/query', (req, res) => {
    const user = {
        name: req.query.name,
        username: req.query.user
    }

    res.render('profile', user);
});

router.get('/home', (req, res, next) => {
    res.render('home', null);
});

module.exports = router;