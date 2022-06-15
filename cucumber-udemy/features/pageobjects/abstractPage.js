
module.exports = class abstractPage {
    async visit(url){
        await browser.url(url)
    }
    
    async waitForSeconds(seconds){
        await browser.pause(seconds * 1000)
    }
}
