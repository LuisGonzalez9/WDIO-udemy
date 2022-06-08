describe.skip('Search Featurre',async () => {
    it('Should search for values using keyboard press', async () => {
        await browser.url('http://zero.webappsecurity.com/index.html')
        await (await $('#searchTerm')).waitForDisplayed()
        await (await $('#searchTerm')).setValue('bank')
        await browser.keys('Enter')

        // Assert that there is a result
        const results = await $('*=Zero - Free')
        await expect(results).toBeDisplayed()
    });
});