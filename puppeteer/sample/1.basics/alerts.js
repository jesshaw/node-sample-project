/**
 * @name alerts
 *
 * @desc 创建对话框然后关闭它.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-dialog}
 */
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 500
    })
    const page = await browser.newPage()
    await page.goto('https://www.baidu.com/')
    page.on('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.dismiss()
    })
    await page.evaluate(() => alert('This message is inside an alert box'))
    await browser.close()
})()
