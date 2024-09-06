//* REQUERIMENTOS DEL SERVIDOR
const express = require('express');
const cors = require('cors');
const multer = require ('multer');
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

//*SERVIDOR
const app = express();
const upload = multer();

//* MIDDLEWARES
app.use(cors()); //? middleware de terceros
app.use(express.json()); //? middleware incorporado
app.use(express.urlencoded({extended:true})); //? Middleware para parsear un formulario URLEncoded
app.use(upload.none()); //? Middleware para parsear un formulario formData
app.use(bodyParser.xml());

//* FUNCIONES DEL SERVIDOR
app.get('/clientes',cors(),(req,res) => {
    console.log(req.params);
    res.json({mensaje: 'Server express escuchando peticion get'});
});

app.post('/clientes',(req,res) => {
    console.log(req.body);
    res.json({mensaje: 'Server express escuchando peticion post'});
});

app.put('/clientes',(req,res) => {
    console.log(req.body);
    res.json({mensaje: 'Server express escuchando peticion put'});
});

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});