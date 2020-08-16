var express = require('express');
const server = express();
const http = require('http').Server(server);

var path = require('path');
var serveStatic = require('serve-static');

const port = process.env.PORT || 3000;

// LocalTest: Comment next two statements for local test

server.use(serveStatic(path.join(__dirname, '/client/public')))

server.get('/', (req, res) => {
    res.sendFile('index.html');
  });

http.listen(port, function () {
    console.log('Server started! Port=' + port);
});


 