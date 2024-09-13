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
//? CONSULTA A LA TABLA DE PELICULAS
app.get('/peliculas', (req, res, next) => {
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
                res.json({ mensaje: "Lo sentimos, no se encuentra ninguna pelicula con esta ID registrada." });
            }
            else {
                res.json(results);
            }
        }
    );
});

//? ALTA DE UNA PELICULA
app.post('/peliculas', (req, res) => {
    const { TITULO, FECHA_LANZAMIENTO, CAST, DIRECTOR, PRODUCTORA } = req.body;

    if (!TITULO || !FECHA_LANZAMIENTO || !CAST || !DIRECTOR || !PRODUCTORA) {
        console.log("Faltan datos: ", { TITULO, FECHA_LANZAMIENTO, CAST, DIRECTOR, PRODUCTORA });
        return res.status(400).json({
            status: 0,
            mensaje: "Completa todos los datos por favor."
        });
    }

    const consulta = `INSERT INTO PELICULA (TITULO, FECHA_LANZAMIENTO, CAST, DIRECTOR, PRODUCTORA) VALUES (?,?,?,?,?)`;

    connection.query(consulta, [TITULO, FECHA_LANZAMIENTO, CAST, DIRECTOR, PRODUCTORA], (err, results) => {
        if (err) {
            return res.status(500).json({
                status: 0,
                mensaje: "Hubo un error al insertar en la base de datos.",
                error: err
            });
        }

        res.json({
            status: 1,
            mensaje: "Película AGREGADA exitosamente."
        });
    });
});


//? BAJA DE UNA PELICULA
app.delete('/peliculas', (req, res) => {
    const consulta = `DELETE FROM PELICULA WHERE ID_PELICULA = ?`;
    const { ID_PELICULA } = req.query;
    
    if (!ID_PELICULA) {
        return res.status(400).json({
            status: 0,
            mensaje: "No ingresaste el ID de la película que quieres eliminar."
        });
    }

    connection.query(consulta, [ID_PELICULA], (err, results) => {
        if (err) {
            return res.status(500).json({
                status: 0,
                mensaje: "Hubo un error al eliminar la película.",
                error: err
            });
        }

        if (results.affectedRows === 0) {
            return res.json({
                status: 0,
                mensaje: "La película con el ID que ingresaste no se encuentra registrada, intenta con otro ID",
                datos: {}
            });
        } else {
            return res.json({
                status: 1,
                mensaje: "Película ELIMINADA exitosamente."
            });
        }
    });
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