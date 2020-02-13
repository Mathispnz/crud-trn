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
    // const { title, author, place, imageUrl } = req.body;

    // const newPainting = new Painting({title, author, place, imageUrl});

    // newPainting.save()
    // .then(() => {
    //     res.status(200).json({
    //         message: 'Painting saved sucessfully'
    //     })
    // })
    // .catch(err => {
    //     res.status(400).json({
    //         message: 'An error ocurred when saving painting to the database'
    //     })
    // });
    Painting.create(req.body)
    .then(newPainting => {
        res.status(200).json(newPainting);
    })
    .catch(err => next(err));
});

module.exports = router;