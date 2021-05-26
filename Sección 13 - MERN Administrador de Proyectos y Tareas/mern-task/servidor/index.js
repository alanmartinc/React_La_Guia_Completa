const express = require('express');

// Crear el servidor
const app = express();

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Definir la página principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});