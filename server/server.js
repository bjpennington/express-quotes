const express = require('express');
let quotes = require('./quotes')

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/quotes', function (req, res) {
    res.send(quotes);
});

app.listen(PORT, function () {
    console.log('Listening on port:', PORT);
});