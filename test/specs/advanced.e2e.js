describe("Adavanced testing", async () =>{

        beforeEach(async () =>{
            await browser.url('https://the-internet.herokuapp.com/upload')

        })
        // beforeEach(async()=>{
        //     await loadWebsite()
        // })

        // afterEach(async () =>{})

    it('File upload 1', async() =>{
        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        await browser.pause(5000)

    })

    it('File upload 2', async() =>{
        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        await browser.pause(5000)

    })

    it('File upload 3', async() =>{
        const filePath = './my-screenshot.png'
        await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
        await browser.pause(5000)

    })

    it('Display and Title and Urls', async () =>{
        const results = await browser.getTitleAndUrl()
        console.log('TITLE =' + results.title) 
        console.log('URL =' + results.url) 

        await browser.waitAndClick('#file-submit')
        await browser.pause(5000)
    })

    it('Change browser session', async () =>{
        console.log('SESSION BEFORE RELOAD ' + browser.sessionId)
        await browser.reloadSession()
        console.log('SESSION AFTER RELOAD ' + browser.sessionId)
    })

    it('Create and switch new window', async () =>{
        await browser.url('https://google.com')
        await browser.newWindow('https://webdriver.io')
        await browser.pause(3000)
        await browser.switchWindow('google.com')
        await browser.pause(3000)
    })

    it('Network Throttle', async () => {
        await browser.throttle('Regular2G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        await browser.throttle('Regular4G')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)

        await browser.throttle('offline')
        await browser.url('https://webdriver.io')
        await browser.pause(3000)
    })

    it('Execute JavaScript code' ,async() =>{
        const result = await browser.execute((a, b) =>{
            return a + b
        }, 5, 10)
        await expect(result).toBe(15)
    })

    it.only('Execute Asyn Javascript Code', async () =>{
        const result = await browser.executeAsync((a, b, done) =>{
            setTimeout(() =>{
                done(a + b)
            }, 3000)
        }, 5, 10)
        await expect(result).toBe(15)
    })
    
})

// async function loadWebsite(){
//     await browser.url('https://the-internet.herokuapp.com/upload') 
// }

// it.only('', async() =>{})