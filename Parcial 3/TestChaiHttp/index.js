const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor Express escuchando petición GET');
});

app.post('/', (req, res) => {
    res.json({ message: 'Servidor Express escuchando petición POST', data: req.body });
});

app.listen(3000, () => {
    console.log('Servidor Express escuchando en el puerto 3000');
});

module.exports = app;