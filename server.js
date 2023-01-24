const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Te amo mamor <3</h1>");
});

app.listen(8080); //El puerto que utilizan los dominion principales por defecto es el 80
console.log("Se esta ejecutando el servidor")