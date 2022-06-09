import navbar from '../pageobjects/components/navbar';
import FeedBackPage from '../pageobjects/FeedBackPage';
import HomePage from '../pageobjects/HomePage'
import LoginPage from '../pageobjects/LoginPage';


describe('Login Test', async () => {
    it('Should not login with invalid credentials', async () => {
        await HomePage.visit()
        await HomePage.setFullHDResolution()

        await navbar.clickOnSignIn()

        await LoginPage.assertLoginPageVisible()
        await LoginPage.login('Invalid-Username', 'Invalid-password')
        await LoginPage.assertLoginErrorMessaGE()

        // await browser.pause(5000)
        await LoginPage.waitForSeconds(3)
    });
    
});

describe('Feedback Test', async () => {
    it('Should submit the feedback form', async () => {
        await HomePage.visit()
        await HomePage.clickOnFeedbackLink()

        await FeedBackPage.submitFeedback('Name', 'test@email.com', 'subject', 'This is a message')
        await FeedBackPage.assertSubmitResult()
        // await browser.pause(4000)
        await FeedBackPage.waitForSeconds(3)
    });
    
});