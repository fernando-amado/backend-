//modulos internos

const express = require("express");
const router = express.Router();

const {Mascota} = require("../model/mascotas");
const { Usuario } = require("../model/usuario");


const autentificacion = require("../middleware/auntetificacion");

//ruta

router.post("/", autentificacion,async(req,res) =>{
    //definir el id del usuario que se valida
    const usuario = await Usuario.findById(req.usuario._id);
    const mascota = await Mascota.findOne({tipo: req.body.tipo});

    // en caso que no exista el usuario
    if (!usuario) return res.status(400).send("El usuario no existe en la BD");
    if(mascota) {
        return res.status(400).send("Ese tipo ya se registro");
    }else {
        const mascota = new Mascota({
            idusuario: usuario._id,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            tipo: req.body.tipo,
        });
        //enviamos el objeto
        const result = await mascota.save();
        res.status(200).send(result);
    }
    //si el usuario existe insertamos la tarea con su id


});


module.exports = router;