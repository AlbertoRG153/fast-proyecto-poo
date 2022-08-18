var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
require("dotenv").config();

var database = require('./modules/database'); 
var motoristasRouter = require('./routes/motoristas-router');
var administradoresRouter = require('./routes/administradores-router');

var app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use('/motoristas', motoristasRouter);
app.use('/administradores', administradoresRouter);


app.get('/', function(req, res){
    res.send('Servidor backend en linea');
});

app.listen(7777, function(){
    console.log("Servidor en Linea");
});