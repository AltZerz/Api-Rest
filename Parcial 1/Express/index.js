// SERVIDOR
const express = require('express');
const app = express();

// FUNCIONES DEL SERVIDOR
app.get('/',(req,res) => {
    res.send('Server express contestando a peticion get')
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

app.listen('/',(req,res) => {
    res.send('Server express escuchando en puerto 3000')
});