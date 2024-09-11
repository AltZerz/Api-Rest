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

//*FUNCIONES CON LA BASE DE DATOS
//? CONSULTA A LA BASE DE DATOS
app.get('/clientes', (req, res, next) => {
    let consulta = ''
    if (typeof(req.query.ID_PELICULA) === 'undefined') {
        consulta = `select * from PELICULA`
    } else {
        consulta = `select * from PELICULA where ID_PELICULA=${req.query.ID_PELICULA}`
    }
    connection.query(consulta, function (err, results, fields) {
            if (err) {
                res.json(err);
            }
            if (results.length == 0) {
                res.json({ mensaje: "Lo sentimos, esta pelicula no registrada por el momento." });
            }
            else {
                res.json(results);
            }
        }
    );
});

//? ALTA DE UN REGISTRO
app.post('/clientes', (req, res) => {
    let consulta = ''
    if (typeof (req.query.TITULO) == 'undefined' || typeof (req.query.FECHA_LANZAMIENTO) == 'undefined' || typeof (req.query.CAST) == 'undefined' || typeof (req.query.DIRECTOR) == 'undefined' || typeof (req.query.PRODUCTORA) == 'undefined') {
        res.json({
            mensaje: "Completa todos los campos por favor.",
        });
    }
    else {
        consulta = `INSERT INTO PELICULA (TITULO, FECHA_LANZAMIENTO, CAST, DIRECTOR, PRODUCTORA) VALUES ('${req.query.TITULO}', '${req.query.FECHA_LANZAMIENTO}', '${req.query.CAST}', '${req.query.DIRECTOR}', '${req.query.PRODUCTORA}')`;
        connection.query(
            consulta,
            function (err, results, fields) {
                if (results && results.affectedRows == 1) {
                    res.json({
                        mensaje: "Pelicula agregada exitosamente.",
                    });
                } else {
                    res.json({
                        mensaje: "Hubo un error al agregar la pelicula, por favor intenta de nuevo.",
                    });
                }
            }
        )
    }
});

//? BAJA DE UN REGISTRO
app.delete('/clientes', (req, res) => {
    let consulta = ''
    if (typeof (req.query.ID) == 'undefined') {
        res.json({
            mensaje: "Ingresa el ID de la pelicula que deseas eliminar por favor.",
        });
    }
    else {
        consulta = `DELETE FROM PELICULA WHERE ID_PELICULA = ${req.query.ID}`;
    }
    connection.query(
        consulta,
        function (err, results, fields) {
            console.log(results);
            if (results.affectedRows == 1) {
                res.json({
                    mensaje: "Pelicula eliminada de la base de datos exitosamente.",
                });
            }
            else {
                res.json({
                    status: 0,
                    mensaje: "Una pelicula con este ID no se encuentra registrada, intenta con otro ID por favor.",
                    datos: {}
                });
            }
        }
    )
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