var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Hello World\n');
    response.end();
}

http.createServer(onRequest).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
