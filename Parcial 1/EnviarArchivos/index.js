// SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// FUNCIONES DEL SERVIDOR
//app.use(cors());

app.get('/sendfile',(req,res) => {
    let archivo = path.join(__dirname, './imagenes/gato.jpg')
    res.sendFile(archivo);
});

app.get('/download',(req,res) => {
    let archivo = path.join(__dirname, './imagenes/gato.jpg')
    res.download(archivo);
});

app.get('/attachment',(req,res) => {
    let archivo = path.join(__dirname, './imagenes/gato.jpg')
    res.attachment(archivo);
    res.end('texto');
});

/*
app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});
*/

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});