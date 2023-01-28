const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Mamor:<br></h1><img src="https://i.pinimg.com/originals/7d/1f/10/7d1f10a1a36bf99d8817b346ccda667d.jpg">');
});

app.listen(8080); //El puerto que utilizan los dominion principales por defecto es el 80
console.log("Se esta ejecutando el servidor")