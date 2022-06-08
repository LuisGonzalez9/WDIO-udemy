describe.skip('Login Flow', () =>{
 // Load Homepage
    before(async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
    });
    it('Shold not login with invalid Credentials', async () => {
        // Click on sign in button
        await browser.waitAndClick('#signin_button')
        // fIll the form
        await $('#login_form').waitForDisplayed()
        await (await $('#user_login')).setValue('test')
        await (await $('#user_password')).setValue('test')
        // Submit the form
        await (await $('input[type="submit"]')).click()
        // Verify error message
        const errorMessage = await $('.alert-error')
        await expect(errorMessage).toHaveTextContaining('Login and/or password are wrong')
    })
    
    it('Reset Account Password', async () => {
        const email = 'test@test.com'
        // Click on reset button
        await browser.waitAndClick('*=Forgot')
        // Fill form
        await (await $('#user_email')).waitForDisplayed()
        await (await $('#user_email')).setValue(email)
        // Submit form
        await (await $('input[type="submit"]')).click()
        // Verify the message
        const message = await $('.span6')
        await expect(message).toHaveTextContaining(`email: ${email}`)
    });
})
