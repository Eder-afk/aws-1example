const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<img src="archivo.jpg">');
});

app.listen(8080); //El puerto que utilizan los dominion principales por defecto es el 80
console.log("Se esta ejecutando el servidor")