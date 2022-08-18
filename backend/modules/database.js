var mongoose = require('mongoose');
require("dotenv").config();

let bd = 'fast';
//pueto de conexion de la base de datos por defecto de mongo
let port = '27017';
//hosting o donde esta ubicado la base de datos en que equipo o servidor
let host = 'localhost';

class Database {
    constructor() {
        this.conectar();
    }

    conectar() {
        //mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        mongoose.connect(
            'mongodb+srv://edwar:edwar2022@fast-proyecto.p4xaw7g.mongodb.net/?retryWrites=true&w=majority'
        )
            .then(() => {
                console.log('Se conecto a mongodb Atlas');
            })
            .catch(error => {
                console.error(JSON.stringify(error));
            });
    }
}

module.exports = new Database();


//MONGODB_URI=mongodb+srv://edwar:edwar2022@fast-proyecto.p4xaw7g.mongodb.net/?retryWrites=true&w=majority