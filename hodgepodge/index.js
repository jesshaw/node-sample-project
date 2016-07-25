var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/welcome"] = requestHandlers.welcome;

server.start(router.route, handle);
