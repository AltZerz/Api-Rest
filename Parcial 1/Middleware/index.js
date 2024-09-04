//* SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();

//* FUNCIONES DEL SERVIDOR
app.use(cors()); //? middleware de terceros

app.use((req,res,next) => {
    console.log(new Date()); //? middleware de aplicación
    next();
});

app.use(express.json()); //? middleware incorporado

app.use(function(err,req,res,next) {
    res.status(500).send("Algo no esta bien"); //? middleware de manejo de errores
});

app.get('/',(req,res) => {
    res.send('Server express contestando a peticion get')
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});