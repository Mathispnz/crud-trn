const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaintingSchema = new Schema({
    title: String,
    author: String,
    place: String,
    imageUrl: String
});

const Painting = mongoose.model('Painting', PaintingSchema);

module.exports = Painting;