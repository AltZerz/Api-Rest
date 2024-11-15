const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensaje: "Servidor express contestando a peticion GET." });
});

app.listen(3000, () => {
    console.log('Servidor express escuchando en el puerto 3000');
});