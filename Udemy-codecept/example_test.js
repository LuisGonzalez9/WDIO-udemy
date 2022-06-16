const examplePage = require("./pages/examplePage")

Feature('Example test suite')

Scenario('my first test', ({ I, examplePage }) => {
  I.amOnPage('http://example.com/')
    // I.seeElement('h1')
    examplePage.assertTitle()
})

