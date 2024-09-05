//* SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();

//* FUNCIONES DEL SERVIDOR
app.use(cors()); //? middleware de terceros

app.use(express.json()); //? middleware incorporado

app.get('/clientes',cors(),(req,res) => {
    console.log(req.params);
    res.json({mensaje: 'Server express escuchando peticion get'});
});

app.post('/clientes',(req,res) => {
    console.log(req.query);
    res.json({mensaje: 'Server express escuchando peticion post'});
});

app.put('/clientes',(req,res) => {
    console.log(req.body);
    res.json({mensaje: 'Server express escuchando peticion put'});
});

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});