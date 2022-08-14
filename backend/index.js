var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var database = require('./modules/database')

var app = express();

app.use(cors()); //Permita peticiones de otros origenes.

app.get('/', function (req, res) {
    res.send('Servidor backend en linea');
});

app.listen(7777, function () {
    console.log("Sevidor levantado")
});