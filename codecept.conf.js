const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://dwf-uat.us-south.containers.appdomain.cloud/coaching',
      browser: 'chrome',
      //basic:{
        //browsers:["chrome","firefox"]
      //},
      //keepBrowserState: true,
      //keepCookies: true,
      windowSize: '1024x768',
      windowSize: 'maximize',
      //user: process.env.STACK_USER,
      //key: process.env.STACK_KEY,
      capabilities: {
       // "project": "CodeceptJS Test",
       // "build": "Test Build",
       // "browserstack.maskCommands":  'setValues, getValues, setCookies, getCookies'
      }
    },
  },
  include: {
    I: './steps_file.js',
    loginpage: './pages/LoginPage.js',
    planpage: './pages/planPage.js',
    homepage: './pages/homePage.js',
    coachingdashboardpage:'./pages/coachingDashboardPage.js',
    intakepage: './pages/intakePage.js',
    solutionstrategypage: './pages/solutionStrategyPage.js',
    CoachingPage: './pages/Coaching.js'
  
  },
  bootstrap: null,
  mocha: {},
  name: 'ui-testing',
  plugins: {
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }
  
};