const express = require('express');
const app = express();

const path = require("path");

const birds = require('./resources/birds');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/birds', birds);

const server = app.listen(8888, function () {
    const host = server.address().address && "localhost";
    const port = server.address().port;

    console.log("baidu app listening at http://%s:%s", host, port);
});