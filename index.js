const fs = require('fs');
const key = fs.readFileSync('C:\\certificates\\localhost.key');
const cert = fs.readFileSync('C:\\certificates\\localhost.crt');
const express = require('express');
const path = require('path');
const https = require('https');
const app = express();
const server = https.createServer({key: key, cert: cert }, app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
server.listen(3001, () => { console.log('listening on 3001') });