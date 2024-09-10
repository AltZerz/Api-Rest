//* SERVIDOR
const express = require('express');
const cors = require('cors');
const mysql2 = require('mysql2');
const app = express();

//* CONEXION A LA BASE DE DATOS
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Happy20022003!',
    database: 'WEB'
});

//* FUNCIONES DEL SERVIDOR
app.use(cors());

app.use(express.json());


app.listen(3000,(req,res)=>{
    console.log('Server express escuchando en puerto 3000')
});

//? CONSULTAS
app.get('/', (req, res) => {
    console.log(req.query.ID_PELICULA);
    let consulta = ''
    if (typeof (req.query.ID_PELICULA) == 'undefined') {
        consulta = `select * from PELICULA`
    } else {
        consulta = `select * from PELICULA where ID_PELICULA=${req.query.ID_PELICULA}`
    }
    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({ mensaje: "Lo sentimos, esta pelicula no registrada por el momento." });
            }
            else {
                res.json(results);
            }
        }
    );
});

/*
app.get('/clientes',cors(),(req,res) => {
    console.log(req.params);
    res.json({mensaje: 'Server express escuchando peticion get'});
});

app.post('/clientes',(req,res) => {
    console.log(req.query);
    res.json({mensaje: 'Server express escuchando peticion post'});
});

app.put('/clientes',(req,res) => {
    console.log(req.body);
    res.json({mensaje: 'Server express escuchando peticion put'});
});
*/