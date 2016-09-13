var logger = require('morgan'),
    cors = require('cors'),
    http = require('http'),
    express = require('express'),
    errorhandler = require('errorhandler'),
    cors = require('cors'),
    dotenv = require('dotenv'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    jwt = require('express-jwt'),
    mongoose = require('mongoose');

var app = express();
var uri = 'mongodb://127.0.0.1:27017/mls';
global.db = mongoose.createConnection(uri);

dotenv.load();

// Parsers
// old version of line
// app.use(bodyParser.urlencoded());
// new version of line
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(err, req, res, next) {
    if (err.name === 'StatusError') {
        res.send(err.status, err.message);
    } else {
        next(err);
    }
});

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler());
}

var jwtCheck = jwt({
    secret: config.secret
}).unless({ path: ['/api/users/login', '/api/users/r', '/api/users/create'] });

app.use('/api', jwtCheck);

// app.use(require('./anonymous-routes'));
app.use('/api/homeworks', require('./homeworks'));
app.use('/api/users', require('./users'));
// app.use(require('./protected-routes'));
// app.use(require('./user-routes'));

//////////////
if (process.env.NODE_ENV === 'development') {
    var route, routes = [];
    app._router.stack.forEach(function(middleware) {
        if (middleware.route) { // routes registered directly on the app
            routes.push({ path: middleware.route, methods: middleware.methods });
        } else if (middleware.name === 'router') { // router middleware 
            middleware.handle.stack.forEach(function(handler) {
                route = handler.route;
                if (route) {
                    var regexpString = middleware.regexp.toString();
                    var i = regexpString.indexOf('\\/?');
                    var path = regexpString.substring(2, i).replace(/\\/g, '') + route.path;
                    routes.push({ path: path, methods: route.methods });
                };
            });
        }
    });


    routes.forEach(function(r) {
        for (var prop in r.methods) {
            if (r.methods[prop]) { console.log(prop + '\t| ' + r.path); };
        }
    })
}



var port = process.env.PORT || 4001;

http.createServer(app).listen(port, function(err) {
    console.log('listening in http://localhost:' + port);
});
