// referenciar los modulos internos

const jwt = require("jsonwebtoken");

function autentificacion(req, res, next) {
  let jwtToken = req.header("Authorization");

  /*
    Authorization = Bearer 
     */

  jwtToken = jwtToken.split(" ")[1];

  // si no existe token

  if (!jwtToken) return res.status(400).send(" no existe token para validar");

  // si existe un jwt clave

  try {
    const payload = jwt.verify(jwtToken, "clave");
    req.usuario = payload;
    next();
  } catch (error) {
    res.status(400).send("Token no valido");
  }
}

module.exports = autentificacion;
