describe('Sauce demo - product order', async () => {
    before( async () =>{
        //Login
        await browser.url('https://www.saucedemo.com/')
        await browser.sauceLogin()
    })
    
    after( async () =>{
        //Logout
        await browser.sauceLogout()
    })
    it('Should complete product order', async () => {
        // Put products into shopping cart
        await $('#inventory_container').waitForDisplayed()
        await $('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await $('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await $('.shopping_cart_link').click()

        // Assert shopping cart
        await $('.cart_list').waitForDisplayed()
        await $('[data-test="checkout"]').click()

        // Fill customer information
        const firstName = 'Luis'
        const lastName = 'Gonzalez'
        const postalCode = '343434'

        await $('.checkout_info').waitForDisplayed()
        await $('[data-test="firstName"]').setValue(firstName)
        await $('[data-test="lastName"]').setValue(lastName)
        await $('[data-test="postalCode"]').setValue(postalCode)
        await $('[data-test="continue"]').click()

        // Assert Final order overview
        await $('.cart_list').waitForDisplayed()
        await $('.summary_info').waitForDisplayed()
        await $('[data-test="finish"]').click()

        const messsage = $('.complete-header')
        await expect(messsage).toHaveTextContaining('THANK YOU FOR YOUR ORDER')
    })
})