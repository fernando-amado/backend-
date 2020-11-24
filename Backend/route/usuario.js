// definir mdulos internos

const express = require("express");
const router = express.Router();

// invocar modulos creados

const { Usuario } = require("../model/usuario");

router.post("/", async (req, res) => {
  //validar si el usuario existe
  let usuario = await Usuario.findOne({ correo: req.body.correo });

  // si el correo del usuario existe en la bd
  if (usuario) return res.status(400).send("el usuario ya existe en la BD");

  //si el usuario no existe
  usuario = new Usuario({
    nombre: req.body.nombre,
    correo: req.body.correo,
    pass: req.body.pass,
  });

  // enviar el usuario a la bd y generar un Json Web Token

  const result = await usuario.save();
  const jwToken = usuario.generateJWT();
  res.status(200).send({ jwToken });
});

//exportamos los modulos

module.exports = router;
