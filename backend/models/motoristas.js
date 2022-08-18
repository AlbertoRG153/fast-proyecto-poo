var mongoose = require ('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    genero: String,
    correo: String,
    edad: String,
    numeroLicencia: String,
    imagen: String,
    contrasena: String,
    codigoMotorista: String,
    identidad: String,
    telefono: String,
    tipoVehiculo: String,
    pedido: Array
});

module.exports = mongoose.model('motoristas', esquema);