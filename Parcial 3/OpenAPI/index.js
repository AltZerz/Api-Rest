const express = require('express');
const cors = require('cors');
const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'OpenAPI',
            version: '1.0.0',
            description: 'Documentacion realizada utilizando OpenAPI con Swagger para la documentacion de un servidor express.',
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ],
    },
    apis: [`${path.join(__dirname, "index.js")}`],
};

app.use(cors());

/**
 * @swagger
 * /emp:
 *   get:
 *     description: El servidor express está escuchando la petición GET
 *     responses:
 *       200:
 *         description: Regresa un mensaje de que el servidor está escuchando correctamente.
 */
app.get('/emp', (req, res) => {
    res.send('Server express contestando a peticion get')
});


/**
 * @swagger
 * /emp:
 *   post:
 *     description: El servidor express está escuchando la petición POST
 *     responses:
 *       200:
 *         description: Regresa un mensaje de que el servidor está escuchando correctamente.
 */
app.post('/emp', (req, res) => {
    res.send('Server express contestando a peticion post')
});

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(3000, (req, res) => {
    console.log('Server express escuchando en puerto 3000')
});