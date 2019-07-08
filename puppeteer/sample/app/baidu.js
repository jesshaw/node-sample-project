const express = require('express');
const app = express();
const router = express.Router();

const path = require("path");


// app.use(express.static(path.join(__dirname, 'public')));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');


// // Asynchronous read
//     fs.readFile('app/baidu.html', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("Asynchronous read: " + data.toString());
//         res.send(data.toString());
//     });

// // Synchronous read
//     var data = fs.readFileSync('input.txt');
//     console.log("Synchronous read: " + data.toString());
});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

var server = app.listen(8888, function () {
    var host = server.address().address && "localhost"
    var port = server.address().port

    console.log("baidu app listening at http://%s:%s", host, port)
});
