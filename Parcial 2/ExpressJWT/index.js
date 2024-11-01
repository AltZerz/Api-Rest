const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use(express.json());

const SECRET_KEY = '12345678';

const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123'
    }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && user.password === password) {
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciales incorrectas' });
    }
});

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token requerido' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token inválido' });
    }
};

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: `Bienvenido, ${req.user.username}!` });
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en el puerto 3000');
});