//modulos internos

const mongoose = require("mongoose");
const Jwt = require("jsonwebtoken");

const esquemamascota = new mongoose.Schema({
    idusuario: String,
    nombre: String,
    descripcion: String,
    tipo: String,
});

const Mascotas = mongoose.model("mascota", esquemamascota);
module.exports.Mascota = Mascotas;