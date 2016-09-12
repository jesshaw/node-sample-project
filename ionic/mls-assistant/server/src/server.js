var logger          = require('morgan'),
    cors            = require('cors'),
    http            = require('http'),
    express         = require('express'),
    errorhandler    = require('errorhandler'),
    cors            = require('cors'),
    dotenv          = require('dotenv'),
    bodyParser      = require('body-parser'),
    config          = require('./config'),
    jwt             = require('express-jwt'),
    mongoose        = require('mongoose');

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
}).unless({path: ['/api/users/login','/api/users/r','/api/users/create']});

app.use('/api', jwtCheck);

// app.use(require('./anonymous-routes'));
app.use('/api/homeworks',require('./homeworks'));
app.use('/api/users',require('./users'));
// app.use(require('./protected-routes'));
// app.use(require('./user-routes'));

var port = process.env.PORT || 4001;

http.createServer(app).listen(port, function (err) {
  console.log('listening in http://localhost:' + port);
});

