const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      smartWait: 5000
    }
  },
  include: {
    I: './steps_file.js',
    examplePage: './pages/examplePage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'Udemy-codecept',
  plugins: {
    pauseOnFail:{},
    retryFailedStep:{
      enabled: false
    },
    tryTo:{
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}