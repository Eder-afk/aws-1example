const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Te amo mamor <3</h1>");
});

app.listen(3000);