var express = require('express');
var router = express.Router();
var administrador = require('../models/administradores');
var mongoose = require('mongoose');

router.get('/', function (req, res) {
    administrador.find({}, { _id: true, nombre: true })
        .then((data) => {
            res.send(data);
            res.end();
        })
        .catch((error) => {
            res.send(error);
            res.end();
        });

});

router.post('/', function (req, res) {
    let admin = new administrador(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            codigoAdmin: req.body.codigoAdmin,
            identidad: req.body.identidad,
            telefono: req.body.telefono
        }
    );
    admin.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});


router.get('/:id', function (req, res) {
    administrador.find({ _id: req.params.id }).then(result => {
        res.send(result[0]);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

router.get('/', function (req, res) {
    administrador.find().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

router.put('/:id', function (req, res) {
    administrador.update(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            correo: req.body.correo,
            contrasena: req.body.contrasena,
            codigoAdmin: req.body.codigoAdmin,
            identidad: req.body.identidad,
            telefono: req.body.telefono
        }
    ).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

router.delete('/:id', function (req, res) {
    administrador.remove(
        {
            _id: req.params.id
        },
    ).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;