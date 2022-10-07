const express = require('express');
const server = express();

const fs = require('fs');
server.use(express.static('public'));

server.get('/', (req, res) => {

    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

});

server.get('/Contacts', (req, res) => {
    fs.readFile('contacts.json', (err, data) => {

    }); 
});

server.listen(8080);