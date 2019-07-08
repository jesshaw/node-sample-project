const http = require('http')

http.createServer(function (req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"});

    const puppeteer = require('puppeteer');
    const url = 'https://baidu.com';
    try {
        (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            // await page.setViewport({ width: 1280, height: 800 })
            await page.goto(url);

           const  names = await page.$$eval('#u1 > a', anchors => {
                return anchors.map(anchor => anchor.textContent).slice(0, 10)
            });

            console.log(names);

            await browser.close();

            res.end("<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "<div>\n" +names+
                "</div>\n" +
                "</body>\n" +
                "</html>\n");

        })()
    } catch (err) {
        console.error(err)

        res.end("exception!");
    }
}).listen(8888);

console.log("server run at http://127.0.0.1:8888");
