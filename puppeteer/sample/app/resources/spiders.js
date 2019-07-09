var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var spiderUtil = require('./spider-util');

const puppeteer = require('puppeteer');

router.use(bodyParser.urlencoded({extend: false}));
router.use(bodyParser.json());

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.get('/', function (req, res) {
    res.send('get a book');

});

router.delete('/', function (req, res) {
    res.send('Delete a book');
});

/*
{
    "url":"https://codemart.com/projects",
    "format":"table",
    "repeat":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2)",
    "fields":[{"key":"title","keyDesc":"标题","value":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2) > div > div.body-content-2y6ks > div > div.title-2q5sH > a"}
    ,{"key":"price","keyDesc":"标题","value":"#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2) > div > div.body-content-2y6ks > div > div.title-2q5sH > span > span > span"}
    ]
}
 */
router.post('/', function (req, res) {
    var singer = req.body;
    spiderUtil.spider(singer).then(o => res.send(o));
});


router.put('/', function (req, res) {
    res.send('Update the book')
});

module.exports = router;



