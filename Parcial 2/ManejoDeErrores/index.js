// SERVIDOR
const express = require('express');
const cors = require('cors');
const app = express();

// FUNCIONES DEL SERVIDOR
app.use(cors());

app.get('/', (req,res) => {
    if (tru) {
        res.json({mensaje:'Server express contestando a peticion GET'});
    }
    else {
        res.json({mensaje:'Server express contestando a peticion GET'});
        
        next(err);
    }
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500);
    res.json({error:err.message})
});

app.post('/',(req,res) => {
    res.send('Server express contestando a peticion post')
});

app.listen(3000, (req, res)=>{
    console.log('Server express escuchando en puerto 3000')
});