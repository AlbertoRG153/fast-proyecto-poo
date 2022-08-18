var express = require('express');
var router = express.Router();
var motorista = require('../models/motoristas');
var mongoose = require('mongoose');

router.post('/', function(req, res){
    let mot = new motorista(
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            correo: req.body.correo,
            edad: req.body.edad,
            numeroLicencia: req.body.numeroLicencia,
            imagen: req.body.imagen,
            contrasena: req.body.contrasena,
            codigoMotorista: req.body.codigoMotorista,
            identidad: req.body.identidad,
            telefono: req.body.telefono,
            tipoVehiculo: req.body.tipoVehiculo
        }
    );
    mot.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
});


router.get('/:id', function(req, res){
    motorista.find({_id:req.params.id}).then(result=>{
        res.send(result[0]); 
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });   
});

router.get('/', function(req, res){
    motorista.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });        
});

router.put('/:id', function(req, res){
    motorista.update(
        {
            _id: req.params.id
        },
        {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            correo: req.body.correo,
            edad: req.body.edad,
            numeroLicencia: req.body.numeroLicencia,
            imagen: req.body.imagen,
            contrasena: req.body.contrasena,
            codigoMotorista: req.body.codigoMotorista,
            identidad: req.body.identidad,
            telefono: req.body.telefono,
            tipoVehiculo: req.body.tipoVehiculo
        }
    ).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    }); 
});

router.delete('/:id', function(req, res){
    motorista.remove(
        {
            _id: req.params.id
        },
    ).then(result=>{
        res.send(result);
        res.end(); 
    }).catch(error=>{
        res.send(error);
        res.end();
    });     
}); 

module.exports = router;