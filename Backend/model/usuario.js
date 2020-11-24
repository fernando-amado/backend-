// definir modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// defina el esquema de colecccion usuarios

const esquemaUsuario = new mongoose.Schema({
  nombre: { type: String },
  correo: { type: String },
  pass: { type: String },
});

// generar el json web token

esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this.id,
      nombre: this.nombre,
      correo: this.correo,
    },
    "clave"
  );
};

//creamos los exports

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
