const express = require('express');
const mongoose = require('mongoose');
const Painting = require('./models/Painting');
const cors = require('cors');

const PORT = 5000;

// CONNECT TO MONGOOSE
mongoose.connect('mongodb://localhost:27017/paintings', {useNewUrlParser: true, useUnifiedTopology: true})
.then(x => {
    console.log(`Connected to Mongo ! Database name: "${x.connections[0].name}"`)
})
.catch(err => console.log(err));


const app = express();

// ADD CORS
app.use(cors({
    origin: ['http://localhost:3000']
}));

const paint = new Painting({
    title: 'La Joconde',
    author: 'Leonard De Vinci',
    place: 'Italie'
});

app.post('/', (req, res, next) => {
    paint.save().then(() => {
        res.status(201).json({
            message: 'Post saved sucessfully'
        });
    }).catch((err) => {
        res.status(400).json({
            error: err
        })
    });
});

// ROUTES

app.use('/', require('./routes/index'));
app.use('/api', require('./routes/paintings'));
app.use('/api', require('./routes/file-upload-routes'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});