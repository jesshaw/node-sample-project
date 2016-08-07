var compression = require('compression');
var express = require('express');
var app = express();

console.log(__dirname + '/www');

var port=3000;

// New call to compress content
app.use(compression());
app.use(express.static(__dirname + '/www'));

app.listen(process.env.PORT || port);

console.log("http://localhost:"+port);