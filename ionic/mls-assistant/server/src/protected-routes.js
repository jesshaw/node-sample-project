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

app.get('/api/protected/homeworks', function(req, res) {

    //console.log(req.query);

    Homework.find({ theClass: req.query.theClass }, null, { sort: { date: -1 } }, function(err, docs) {
        if (err)
            return next(err);
        // console.dir(docs);
        res.status(200).send(docs);
    });
});

app.get('/api/homework', function(req, res) {

    //console.log(req.query);

    Homework.find({ _id: req.query.id }, null, { sort: { date: -1 } }, function(err, docs) {
        if (err)
            return next(err);
        // console.dir(docs);
        res.status(200).send(docs);
    });
});



app.post('/api/homeworks/save', function(req, res) {
    console.log(req.body);

    Homework.findOne({ _id: req.body.id }, function(err, homework) {
        if (!homework) {
            homework = new Homework();
        }
        homework.catgory = req.body.catgory;
        homework.date = new Date(req.body.date);
        homework.theClass = req.body.theClass;
        homework.content = req.body.content;
        homework.createTime = Date.now();
        homework.updateTime = Date.now();
        homework.status = req.body.status;
        homework.save(function(err, homework) {
            if (err) return console.error(err);
            res.status(200).send(homework);
        });
    });
});

app.post('/api/protected/homeworks/save', function(req, res) {
    console.log(req.body);

    Homework.findOne({ _id: req.body.id }, function(err, homework) {
        if (!homework) {
            homework = new Homework();
        }
        homework.catgory = req.body.catgory;
        homework.date = new Date(req.body.date);
        homework.theClass = req.body.theClass;
        homework.content = req.body.content;
        homework.createTime = Date.now();
        homework.updateTime = Date.now();
        homework.status = req.body.status;
        homework.save(function(err, homework) {
            if (err) return console.error(err);
            res.status(200).send(homework);
        });
    });
});
