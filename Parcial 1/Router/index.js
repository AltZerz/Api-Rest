//* SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const peliculas = require('./rutas/peliculas.js');

//* FUNCIONES DEL SERVIDOR
app.use(cors());
app.use(express.json());

//*RUTAS DEL ROUTER
//?Ruta de peliculas
app.use('/peliculas',peliculas.router);

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});