const abstractPage = require("./abstractPage");

class FeedbackPage extends abstractPage{
    get nameInput(){
        return $('#name')
    }
    get emailInput(){
        return $('#email')
    }
    get subjectInput(){
        return $('#subject')
    }
    get messageInput(){
        return $('#comment')
    }
    get btnSubmit(){
        return $('.btn-primary')
    }

    async visit()
    {
        await browser.url('http://zero.webappsecurity.com/feedback.html')
    }

    async submitFeedback(text){
        await (await this.nameInput).setValue('My Name')
        await (await this.emailInput).setValue('email@email.com')
        await (await this.subjectInput).setValue('Subject')
        await (await this.messageInput).setValue('This is my message')
        await (await this.btnSubmit).click()
    }

}

module.exports = new FeedbackPage()