var compression = require('compression');
var express = require('express');
var app = express();

console.log(__dirname + '/www');

// New call to compress content
app.use(compression());
app.use(express.static(__dirname + '/www'));

app.listen(process.env.PORT || 3000);