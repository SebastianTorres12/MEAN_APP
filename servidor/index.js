const express = require('express');
const res = require('express/lib/response');
const conectarDB = require('./config/db');
const cors = require("cors");

//Creamos el servidor
const app = express();

//Conectamos a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/tareas', require('./routes/tarea'));

//Definimos el puerto
app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000');
})