import AbstractPage from './AbstractPage'

class HomePage extends AbstractPage{
    // Selectors
    public get feedBackLink(){
        return $('#feedback')
    }
    //Functions
    public async visit(){
        await browser.url('http://zero.webappsecurity.com/index.html')
    }

    public async clickOnFeedbackLink(){

        await (await this.feedBackLink).click()
    }
}
export default new HomePage()
