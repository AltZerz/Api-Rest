// SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();

// FUNCIONES DEL SERVIDOR
app.use(cors());

app.get('/',(req,res) => {
    res.send('Server express contestando a peticion get')
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});