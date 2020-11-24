// modulos internos node

const express = require("express");
const router = express.Router();

// modulos internos

const { Usuario } = require("../model/usuario");

// ruta

router.post("/", async (req, res) => {
  const usuario = await Usuario.findOne({ correo: req.body.correo });

  //si no existe
  if (!usuario) return res.status(400).send(" usuario o contraseña invalida");

  if (usuario.pass !== req.body.pass)
    return res.status(400).send(" usuario o contraseña invalida");

  // generar un jwt
  const jwToken = usuario.generateJWT();
  res.status(200).send({ jwToken });
});

module.exports = router;
