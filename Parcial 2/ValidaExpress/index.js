// SERVIDOR
const express = require('express');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const app = express();

// FUNCIONES DEL SERVIDOR
app.use(cors());

app.get('/',[ check('ID','Hubo un error en el ID ingresado, se esperaba un numero.').isNumeric(),
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

app.listen(3000, (req, res)=>{
    console.log('Server express escuchando en puerto 3000')
});