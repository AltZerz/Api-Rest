const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const cors = require('cors');

app.use(cors());
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    let opciones = {
        titulo: "Titulo de la plantilla",
        subtitulo: "Subtitulo de la plantilla"
    };

    res.render('plantilla', opciones);
});

app.listen(3000, (req, res)=>{
    console.log('Server express escuchando en puerto 3000')
});