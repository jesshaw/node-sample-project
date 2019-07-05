/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://news.baidu.com')

    // execute standard javascript in the context of the page.
    const stories = await page.$$eval('li > strong > a:nth-child(1)', anchors => {
        return anchors.map(anchor => anchor.textContent).slice(0, 10)
    })
    console.log(stories)
    await browser.close()
})();
