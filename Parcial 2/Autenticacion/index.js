// SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();
const basicAuth = require('express-basic-auth');

// FUNCIONES DEL SERVIDOR
app.use(basicAuth({
    users: { 'user1': 'password' },
    challenge: true,
    unauthorizedResponse: (req) => 'Credenciales ingresadas incorrectas'
}));

app.get('/',(req,res) => {
    res.send('Server express contestando a peticion get')
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

app.listen(3001,(req,res)=>{
    console.log('Server express escuchando en puerto 3001')
});