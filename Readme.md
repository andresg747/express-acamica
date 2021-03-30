
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

1- Crearemos un archivo `.env` en la raíz del proyecto con el siguiente contenido:
`API_BASE_URL=https://restcountries.eu/rest/v2`

2- Renombraremos el set de rutas existente, agregándole el prefijo: `/v1` de manera que las rutas sean consumidas como: 
- `/v1/paises` [GET]
- `/v1/pais` [GET, POST, PUT, DELETE]

3- Agregar un nuevo set de rutas con el prefijo: `/v2/`

Los endpoints disponibles en este nuevo set serán:
- `/v2/paises` [GET]
- `/v2/pais/:id` [GET]
- `/v2/paises/region/:region` [GET]

#### Recursos adicionales

URL para obtener un país por id:
`https://restcountries.eu/rest/v2/name/{name}`

URL para obtener países por región:
`https://restcountries.eu/rest/v2/region/{region}`

**En la clase** veremos cómo:
- Hacer uso de middlewares para agregar una firma personalizada a cada endpoint.
- Transformar la colección de datos que responderemos al cliente (limit y sort).
- Agregar un middleware global para monitorear los tiempos de respuesta del servicio, haciendo uso de `res.locals`.


