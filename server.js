const express = require('express');
const server = express();

const fs = require('fs');

server.get('/', (req, res) = () => {

    fs.readFile('/public/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

});