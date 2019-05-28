
const express = require('express');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res, next) => {
    res.sendFile('./assets/index.html');
})

app.get('/userform', (req, res, next) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);
})

const server = app.listen(3000, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
})