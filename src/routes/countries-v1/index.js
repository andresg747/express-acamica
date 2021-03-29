const express = require('express');
const app = express();

//Inicializamos un Objeto Pais 
let pais = {
  nombre: '',
  habitantes: ''
};

//Inicializamos un Objeto respuesta
let respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
};

app.get('/paises', async function (req, res) {
  // TODO:
  // - Consultar API para mostrar listado de países
  const limit = req.query.limit;
  try {
    const result = await getCountries(limit);
    res.send(limit);
  } catch (error) {
    console.log(error);
  }
});

//Creamos otro metodo Get para ver el pais
app.get('/pais', function (req, res) {
  //Inicializamos la respuesta
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
  };

  if (pais.nombre === '' || pais.habitantes === '') {
    //Si el pais NO exite modificamos la respuesta
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'El pais no ha sido creado'
    };
  } else {
    //Si el pais SI existe generamos la respuesta
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'respuesta del pais',
      respuesta: pais
    };
  }
  // Imprimimos respuesta
  res.send(respuesta);
});

//Creamos el metodo Post para crear el pais
app.post('/pais', function (req, res) {
  console.log(req.body.nombre);
  if (!req.body.nombre || !req.body.habitantes) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y habitantes son requeridos'
    };
  } else {
    if (pais.nombre !== '' || pais.habitantes !== '') {
      respuesta = {
        error: true,
        codigo: 503,
        mensaje: 'El pais ya fue creado'
      };
    } else {
      //Si el pais NO existe, lo creamos y generamos la respuesta
      pais = {
        nombre: req.body.nombre,
        habitantes: req.body.habitantes
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'pais creado',
        respuesta: pais
      };
    }
  }
  //Imrpimimos respuesta
  res.send(respuesta);
});

//Creamos el metodo Put para Actualizar el pais
app.put('/pais', function (req, res) {
  if (!req.body.nombre || !req.body.habitantes) {
    respuesta = {
      error: true,
      codigo: 502,
      mensaje: 'El campo nombre y habitantes son requeridos'
    };
  } else {

    //Si NO tenemos un pais creado para modificar
    if (pais.nombre === '' || pais.habitantes === '') {
      respuesta = {
        error: true,
        codigo: 501,
        mensaje: 'El pais no ha sido creado'
      };
    } else {

      //Si el pais SI existe, lo actualizamos y generamos la respuesta
      pais = {
        nombre: req.body.nombre,
        habitantes: req.body.habitantes
      };
      respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'pais actualizado',
        respuesta: pais
      };
    }
  }
  //Imrpimimos respuesta
  res.send(respuesta);
});

//Creamos el metodo Delete para eliminar el pais
app.delete('/pais', function (req, res) {

  //si no existe el Pais 
  if (pais.nombre === '' || pais.habitantes === '') {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: 'El pais no ha sido creado'
    };
  } else {
    //Si hay un pais creado, lo eliminamos
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'pais eliminado'
    };
    pais = {
      nombre: '',
      habitantes: ''
    };
  }
  //Imrpimimos respuesta
  res.send(respuesta);
});

module.exports = app;
