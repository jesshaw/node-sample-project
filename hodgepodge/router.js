/************ example 1 ****************/
// function route(handle, pathname) {
//     console.log("路由 About to route a request for " + pathname);

//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname]();
//     } else {
//         console.log("No request handler found for " + pathname);
//         return "404 Not found";
//     }
// }

/************ example 2 ****************/
// function route(handle, pathname, response) {
//     console.log("路由 About to route a request for " + pathname);
//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname](response);
//     } else {
//         console.log("No request handler found for " + pathname);
//         response.writeHead(404, {
//             "Content-Type": "text/plain"
//         });
//         response.write("404 Not found");
//         response.end();
//     }
// }

/************ example 3 ****************/
// function route(handle, pathname, response, postData) {
//     console.log("路由 About to route a request for " + pathname);
//     if (typeof handle[pathname] === 'function') {
//         return handle[pathname](response, postData);
//     } else {
//         console.log("No request handler found for " + pathname);
//         response.writeHead(404, {
//             "Content-Type": "text/plain"
//         });
//         response.write("404 Not found");
//         response.end();
//     }
// }
/************ example 4 ****************/
function route(handle, pathname, response, request) {
    console.log("路由 About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}
exports.route = route;
