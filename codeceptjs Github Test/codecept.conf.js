exports.config = {
  tests: './tests/*_test.js',
  output: './tests/output',
  helpers: {
    WebDriver: {
      url: 'http://https://github.com',
      browser: 'chrome'
    },
    "ResembleHelper": {
       "require": "codeceptjs-resemblehelper",
       "screenshotFolder" : "./tests/output",
       "baseFolder": "./tests/screenshots",
      "diffFolder": "./tests/screenshots"
     },
    /* "Puppeteer": {
      "url": "http://localhost:1337/index.html",
      "show": true
      
    }*/

  },
  include: {

  },
  bootstrap: null,
  mocha: {},
  name: 'percona-1'
}
