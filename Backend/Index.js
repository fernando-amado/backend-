// invocar modulos internos

const express = require("express");
const mongoose = require("mongoose");

// modulos de rutas creados

const usuario = require("./route/usuario");
const autentificacion = require("./route/auntentificacion");
const mascotas = require("./route/Mascotas");

// app

const app = express();

app.use(express.json());

// definimos la ruta para el modulo usuarios

app.use("/api/usuario", usuario);
app.use("/api/autentificacion",autentificacion);
app.use("/api/mascotas",mascotas);

// puertos de ejecuccion

const port = process.env.PORT || 3002;
app.listen(port, () =>
    console.log("... Se esta ejecutando por el puerto ", port)
);

// registro en mongo

mongoose
    .connect("mongodb://localhost/mascotasdb", {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(" conexion con mongo OK ... "))
    .catch(() => console.log(" conexion con mongo OFF .."));
