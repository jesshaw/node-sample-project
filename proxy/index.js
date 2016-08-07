var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

proxy.on('error', function(err, req, res) {
    res.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    res.end('Something went wrong. And we are reporting a custom error message.');
});

var server = require('http').createServer(function(req, res) {
    var host = req.headers.host,
        ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    switch (host) {
        case 'miaowang.xyz':
        case 'www.miaowang.xyz':
            proxy.web(req, res, {
                target: 'http://localhost:3000'
            });
            break;
        case 'weixin.miaowang.xyz':
            proxy.web(req, res, {
                target: 'http://localhost:3001'
            });
            break;
        case 'blog.miaowang.xyz':
            proxy.web(req, res, {
                target: 'http://www.cnblogs.com/jes_shaw/'
            });
            break;
        case 'sanfor.com.cn':
        case 'www.sanfor.com.cn':
            proxy.web(req, res, {
                target: 'http://localhost:3000'
            });
            break;
        case 'weixin.sanfor.com.cn':
            proxy.web(req, res, {
                target: 'http://localhost:3001'
            });
            break;
        case 'demo.sanfor.com.cn':
            proxy.web(req, res, {
                target: 'http://localhost:4002'
            });
            break;
        default:
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Welcome to my server!');
    }
});

console.log("listening on port 80");
server.listen(80);
