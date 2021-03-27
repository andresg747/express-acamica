const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(routes);

//Inicializamos el Server en el puerto 3000
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

module.exports = {
  app
};
