
# express-acamica
Ejemplo de servidor realizado con ExpressJS

### Instrucciones
Abrir una terminal / línea de comandos en el directorio deseado y ejecutar:
1. `git clone git@github.com:andresg747/express-acamica.git`
2. `cd express-acamica`
3. `npm i ` o `npm install`
4. `npm run dev`

En este punto ya deberíamos tener corriendo nuestro servidor con nodemon escuchando cambios en nuestros archivos.

### Ejercicio propuesto
Crearemos un servicio para poder consumir una API externa de países.

1- Renombraremos el set de rutas existente, agregándole el prefijo: `/v1` de manera que las rutas sean consumidas como: 
- `/v1/paises` [GET]
- `/v1/pais` [GET, POST, PUT, DELETE]

2- Agregar un nuevo set de rutas con el prefijo: `/v2/`

Los endpoints disponibles en este nuevo set serán:
- `/v2/paises` [GET]
- `/v2/paises/:id` [GET]
- `/v2/paises/region/:region` [GET]

En la clase veremos cómo:
- Hacer uso de middlewares para agregar una firma personalizada a cada endpoint.
- Transformar la colección de datos que responderemos al cliente (limit y sort).
- Agregar un middleware global para monitorear los tiempos de respuesta del servicio, haciendo uso de `res.locals`.
