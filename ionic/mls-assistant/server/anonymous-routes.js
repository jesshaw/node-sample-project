var express = require('express'),
    quoter = require('./quoter'),
    Homework = require('./homework.js');

var app = module.exports = express.Router();

app.get('/api/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});

app.get('/api/homeworks', function(req, res) {
    Homework.find(function(err, docs) {
        if (err) return next(err);
        // console.dir(docs);
        res.status(200).send(docs);
    });


});

app.get('/api/homeworks/save', function(req, res) {
    var homework = new Homework({
        id: 14,
        catgory: "3",
        date: '2016-8-7',
        content: ' <h2> 查看复习题 </h2> <h3> 中译日 </h3>'
    });

    homework.save(function(err, homework) {
        if (err) return console.error(err);
        res.status(200).send(homework);
    });
});
