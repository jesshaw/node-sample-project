/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.$eval method
 *
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://news.baidu.com')
    const name = await page.$eval('.hdline0 > strong', el => el.innerText)
    console.log(name)
    await browser.close()
})()
