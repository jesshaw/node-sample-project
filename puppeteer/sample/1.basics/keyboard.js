/**
 * @name keyboard
 *
 * @desc types into a text editor
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagehoverselector}
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 500})
    const page = await browser.newPage()
    await page.goto('https://baidu.com')
    await page.focus('#kw')
    await page.keyboard.type('只是添加一个标题')
    await page.screenshot({ path: 'keyboard.png' })
    await browser.close()
})()
