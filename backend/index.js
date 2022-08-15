var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
require("dotenv").config();

var database = require('./modules/database');
const { default: mongoose } = require('mongoose');

var app = express();
const puerto = 7777;

app.use(cors()); //Permita peticiones de otros origenes.

app.get('/', function (req, res) {
    res.send('Servidor backend en linea');
});


app.listen(puerto, function () {
    console.log("Sevidor levantado")
});


