const puppeteer = require('puppeteer');

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
module.exports.spider = async function spider(temp) {
    var result;
    if (!!temp.repeat) {
        result = await spiderList(temp);
    }
    else {
        result = await spiderSinger(temp);
    }
    return result;
};

module.exports.spiderSinger = spiderSinger;
module.exports.spiderList = spiderList;

async function spiderSinger(temp) {
    console.log(temp);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setViewport({ width: 1280, height: 800 })
    await page.goto(temp.url);
    // var r = {};
    // temp.fields.forEach(async (o) => r[o.key] = await page.$eval(o.value).innerText);

    var list = await page.evaluate(fields => {
        // console.log(fields[0].value);
        // console.log(document.querySelector(fields[0].value).innerText);
        var r = {};
        fields.forEach(o => r[o.key] = document.querySelector(o.value).innerText);
        return r;
    }, temp.fields);


    console.log(list);
    await browser.close();
    return list;
};

async function spiderList(temp) {

    console.log(temp);
    temp.fields.forEach(f => {
        f.value = f.value.replace(temp.repeat, '');
        f.value = f.value.substr(f.value.indexOf('>') + 1);
    });
    temp.repeat = temp.repeat.substr(0, temp.repeat.lastIndexOf(":"));

    console.log(temp);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.setViewport({ width: 1280, height: 800 })
    await page.goto(temp.url);

    const list = await page.$$eval(temp.repeat, (nodes, fields) => nodes.map(n => {
        var r = {};
        fields.forEach(o => r[o.key] = n.querySelector(o.value).innerText);
        return r;
    }), temp.fields);

    console.log(list);
    await browser.close();
    return list;
};



