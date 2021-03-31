//Configuracion basica de express, como hacer un import
const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

//Crear el servidor de express
const app = express();

//Llamar mi DB
dbConnection();

//CORS 
app.use(cors());

//Directorio publico
app.use(express.static('public'));

//Lectura y parseo del body (Enviamor informacion)
app.use(express.json());


//Rutas o Endpoints
app.use('/api/auth', require('./routes/auth')); // --> Auth: crear, login, token
// --> Crud: Eventos


//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Corriendo servidor ${process.env.PORT}`);
});