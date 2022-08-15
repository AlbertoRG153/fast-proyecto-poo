var mongoose = require('mongoose');
require("dotenv").config();
//Nombre BD, spotify

let bd = 'spotify';
let port = '27017';
let host = 'localhost';

class Database {
    constructor() {
        this.conectar();
    }

    conectar() {
        mongoose.connect(process.env.MONGODB_URI)
            .then(result => console.log('Se conecto a mongodb atlas'))
            .catch(error => console.log(error));

    }
}

module.exports = new Database();