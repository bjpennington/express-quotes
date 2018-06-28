const express = require('express');
const bodyParser = require('body-parser');

let quotes = require('./quotes');


const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended : true}));

app.get('/quotes', function(req, res) {
    res.send(quotes);
});

app.post('/quotes', function (req, res) {
    console.log(req.body);
    quotes.push(req.body);
    res.sendStatus(201);
});

app.listen(PORT, function () {
    console.log('Listening on port:', PORT);
});
