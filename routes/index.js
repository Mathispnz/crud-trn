const express = require('express');
const router = express.Router();
const Painting = require('../models/Painting');

router.get('/', (req, res) => {
    // Painting.find()
    // .then(allPaintings => {
    //     console.log(allPaintings);
    //     res.json(allPaintings);
    // })
    // .catch(err => {
    //     res.json(err)
    // });
    // res.render('index');
});

module.exports = router;