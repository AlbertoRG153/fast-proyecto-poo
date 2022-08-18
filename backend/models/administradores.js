var mongoose = require ('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    genero: String,
    correo: String,
    contrasena: String,
    codigoAdmin: String,
    identidad: String,
    telefono: String,
});

module.exports = mongoose.model('administradores', esquema);