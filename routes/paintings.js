const express = require('express');
const router = express.Router();

const Painting = require('../models/Painting');

router.get('/paintings', (req, res, next) => {
    Painting.find()
    .then(allPaintings => {
        console.log(allPaintings);
        res.json(allPaintings);
    })
    .catch(err => {
        next(err)
    });
});

router.post('/paintings/create', (req, res, next) => {
    console.log('body :', req.body);
    Painting.create(req.body)
    .then(newPainting => {
        res.status(200).json(newPainting);
    })
    .catch(err => next(err));
});

module.exports = router;