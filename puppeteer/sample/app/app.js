const express = require('express');
const app = express();

const path = require("path");

const birds = require('./resources/birds');
const spiders = require('./resources/spiders');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/birds', birds);
app.use('/spiders', spiders);

const server = app.listen(8888, function () {
    const host = server.address().address && "localhost";
    const port = server.address().port;

    console.log(`baidu app listening at http://${host}:${port}`);
});
