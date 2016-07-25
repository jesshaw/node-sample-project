/************ example 0 ****************/
// function start() {
//     console.log("调用 Request handler 'start' was called.");

//     function sleep(milliSeconds) {
//         var startTime = new Date().getTime();
//         while (new Date().getTime() < startTime + milliSeconds);
//     }

//     sleep(5000);

//     return "Hello Start";
// }

// function upload() {
//     console.log("Request handler 'upload' was called.");
//     return "Hello Upload";
// }

/************ example 1 ****************/
// var exec = require("child_process").exec;

// function start(response) {
//     console.log("调用 Request handler 'start' was called.");
//     // exec("ls -lah", function(error, stdout, stderr) {
//     //     response.writeHead(200, {
//     //         "Content-Type": "text/plain"
//     //     });
//     //     response.write(stdout);
//     //     response.end();
//     // });

//     exec("find /", {
//         timeout: 10000,
//         maxBuffer: 20000 * 1024
//     }, function(error, stdout, stderr) {

//         response.writeHead(200, {
//             "Content-Type": "text/plain"
//         });
//         response.write(stdout);
//         response.end();
//     });
// }

// function upload(response) {
//     console.log("调用 Request handler 'upload' was called.");
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.write("Hello Upload");
//     response.end();
// }

/************ example 2 ****************/
// var exec = require("child_process").exec;

// function start(response) {
//     console.log("调用 Request handler 'start' was called.");
//     var body = '<html><head><meta charset="UTF-8" /><title></title></head><body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" cols="60" rows="20"></textarea> ' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body></html>';

//     response.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     response.write(body);
//     response.end();
// }

// function upload(response) {
//     console.log("调用 Request handler 'upload' was called.");
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.write("Hello Upload");
//     response.end();
// }


/************ example 3 ****************/

// var exec = require("child_process").exec;
// var querystring = require("querystring");

// function start(response, postData) {
//     console.log("调用 Request handler 'start' was called.");
//     var body = '<html><head><meta charset="UTF-8" /><title></title></head><body>' +
//         '<form action="/upload" method="post">' +
//         '<textarea name="text" cols="60" rows="20"></textarea> ' +
//         '<input type="text" name="name" /> ' +
//         '<input type="submit" value="Submit text" />' +
//         '</form>' +
//         '</body></html>';

//     response.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     response.write(body);
//     response.end();
// }

// function upload(response, postData) {
//     console.log("调用 Request handler 'upload' was called.");
//     response.writeHead(200, {
//         "Content-Type": "text/plain"
//     });
//     response.write("You've sent: " +
//         querystring.parse(postData).text);
//     response.end();
// }


/************ example 4 ****************/

var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
    console.log("调用 Request handler 'start' was called.");
    var body = '<html><head><meta charset="UTF-8" /><title></title></head><body>' +
        '<form action="/upload" enctype="multipart/form-data" method="post">' +
        '<input type="file" name="upload" multipart="multipart" /> ' +
        '<input type="submit" value="Submit file" />' +
        '</form>' +
        '</body></html>';

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
}

function upload(response, request) {
    console.log("调用 Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    form.uploadDir = "tmp";
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parse done");
        fs.renameSync(files.upload.path, "tmp/test.png");

        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("received image:,<br/>");
        response.write("<image src='/show'/>");
        response.end();
    });
}

function show(response) {
    console.log("调用 Request handler 'show' was called.");
    fs.readFile("tmp/test.png", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {
                "Content-Type": "text/plain"
            });
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {
                "Content-Type": "image/png"
            });
            response.write(file, "binary");
            response.end();
        }
    });

}

function welcome(response) {
    var body = '<!DOCTYPE html><html><head><meta charset="UTF-8" /><title>Welcome</title></head><body>Welcome!欢迎！</body></html>';

    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write(body);
    response.end();
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.welcome = welcome;
