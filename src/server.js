require('dotenv').config();

const express = require("express");
const app = express();
const routes = require('./routes');
const logger = require('./middlewares/logger');

// Global middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);

// Routes
app.use(routes);

//Inicializamos el Server en el puerto 3000
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
