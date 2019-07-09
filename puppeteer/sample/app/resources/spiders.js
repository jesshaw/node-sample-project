var express = require('express');
var router = express.Router();

const puppeteer = require('puppeteer');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.get('/', function (req, res) {
    console.log("Got a POST request for the homepage");

    const url = req.params.url || 'https://codemart.com/projects';
    var repeatSelector = req.params.r || '#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2)';
    var selector = req.params.s || '#container > div > div > div > div > div > div.left-container-1dwXK > div.list-container--j7Ng > div > div > div:nth-child(2) > div > div.body-content-2y6ks > div > div.title-2q5sH > a';
    selector = selector.replace(repeatSelector, '');
    var index = selector.indexOf('>') + 1;
    selector = selector.substr(index);
    console.log(selector);
    repeatSelector = repeatSelector.substr(0, repeatSelector.lastIndexOf(":"));


    try {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            // await page.setViewport({ width: 1280, height: 800 })
            await page.goto(url);

            const list = await page.$$eval(repeatSelector, (nodes, s) => nodes.map(n => {
                return n.querySelector(s).innerText;
            }).slice(0, 3), selector);

            console.log(list);

            await browser.close();

            res.send(list);

        })()
    } catch (err) {
        console.error(err)

        res.send("exception!");
    }
});

router.delete('/', function (req, res) {
    res.send('Delete a book');
});

router.post('/', function (req, res) {
    res.send('Add a book')
});

router.put('/', function (req, res) {
    res.send('Update the book')
});

module.exports = router;



