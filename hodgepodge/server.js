/************ example 1 ****************/
// var http = require('http');
// var url = require('url');

// function start(route, handle) {

//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("接收 Request for " + pathname + " received.");

//         // response.writeHead(200, {
//         //     "Content-Type": "text/plain"
//         // });

//         // var content = route(handle, pathname);
//         // response.write(content);

//         // response.end();

//         route(handle, pathname, response);
//     }

//     http.createServer(onRequest).listen(1337, '127.0.0.1');

//     console.log('启动 Server running at http://127.0.0.1:1337/');
// }

/************ example 2 ****************/

// var http = require('http');
// var url = require('url');

// function start(route, handle) {

//     function onRequest(request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log("接收 Request for " + pathname + " received.");

//         route(handle, pathname, response);
//     }

//     http.createServer(onRequest).listen(1337, '127.0.0.1');

//     console.log('启动 Server running at http://127.0.0.1:1337/');
// }



/************ example 3 ****************/

// var http = require('http');
// var url = require('url');

// function start(route, handle) {

//     function onRequest(request, response) {
//         var postData = "";
//         var pathname = url.parse(request.url).pathname;
//         console.log("接收 Request for " + pathname + " received.");

//         request.setEncoding("utf-8");
//         request.addListener("data", function(postDataChunk) {
//             postData += postDataChunk;
//             console.log("Received POST data chunk '" +
//                 postDataChunk + "'.");
//         });

//         request.addListener("end", function() {
//             route(handle, pathname, response, postData);
//         });
//     }

//     http.createServer(onRequest).listen(1337, '127.0.0.1');

//     console.log('启动 Server running at http://127.0.0.1:1337/');
// }

/************ example 4 ****************/

var http = require('http');
var url = require('url');

function start(route, handle) {

    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("接收 Request for " + pathname + " received.");

        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(1337, '127.0.0.1');

    console.log('启动 Server running at http://127.0.0.1:1337/');
}




exports.start = start;
