// const app = require('../server');
const express = require('express');
const app = express();
const countriesv1 = require('./countries-v1');
const countriesv2 = require('./countries-v2');

// v1
app.use('/v1', countriesv1)

// v2
app.use('/v2', countriesv2)

//Generamos la respuesta para url no encontradas
app.use('*', function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: 'URL no encontrada'
  };
  //Imrpimimos respuesta
  res.status(404).send(respuesta);
});

module.exports = app;
