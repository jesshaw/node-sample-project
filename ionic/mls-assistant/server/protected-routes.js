var express = require('express'),
    jwt = require('express-jwt'),
    config = require('./config'),
    quoter = require('./quoter'),
    Homework = require('./homework.js');

var app = module.exports = express.Router();

var jwtCheck = jwt({
    secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});

app.get('/api/homeworks', function(req, res) {

    console.log(req.query);

    Homework.find({theClass:req.query.theClass},function(err, docs) {
        if (err)
            return next(err);
        // console.dir(docs);
        res.status(200).send(docs);
    });
});

app.get('/api/homeworks/save', function(req, res) {
    var homework = new Homework({
        catgory: req.catgory,
        date: new date(req.date),
        content: req.content,
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()        
    });

    homework.save(function(err, homework) {
        if (err) return console.error(err);
        res.status(200).send(homework);
    });
});

//curl http://localhost:3001/api/homeworks/init

app.get('/api/homeworks/init', function(req, res) {
    var homeworks=[];
    homeworks.push(new Homework({
        catgory: "1",
        theClass: "class1",
        date: new Date().getTime(),
        content: '<h2> 查看复习题 </h2> <h3> 中译日 </h3>',
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
    }));

    homeworks.push(new Homework({
        catgory: "2",
        theClass: "class1",
        date: new Date().getTime(),
        content: '<h2> 查看复习题 </h2> <h3> 中译日 </h3>',
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
    }));

    homeworks.push(new Homework({
        catgory: "3",
        theClass: "class1",
        date: new Date().getTime(),
        content: '<h2> 查看复习题 </h2> <h3> 中译日 </h3>',
        createTime: new Date().getTime(),
        updateTime: new Date().getTime()
    }));    

    for (var i = 0; i < homeworks.length; i++) {
        homeworks[i].save(function(err, homework) {
            if (err) 
            	return console.error(err);
            res.status(200).send(homework);
        });
    }
});


