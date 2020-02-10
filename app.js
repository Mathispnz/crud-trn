const express = require('express');
const PORT = 8080;
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})