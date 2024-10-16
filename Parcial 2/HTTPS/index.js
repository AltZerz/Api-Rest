// SERVIDOR
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();

// FUNCIONES DEL SERVIDOR
const options = {
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
};

app.get('/', [  check('ID','Hubo un error en el ID ingresado, se esperaba un numero.').isNumeric(),
                check('Edad', 'Hubo un error en la edad ingresada, se esperaba un numero.').isNumeric(),
                check('Correo','Hubo un error en el correo ingresado').isEmail(),
    ], (req,res) => {
        const resultError = validationResult(req);

        if (resultError.isEmpty()) {
            res.json('Respuesta a peticion get')
        } else {
            res.json(resultError);
        }
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

https.createServer(options,app).listen(3000,()=>{
    console.log('Server express escuchando el puerto 3000')
})