require('dotenv/config')
exports.config = {

    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,

    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
    }],

    logLevel: 'info',
 
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
 
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
   
    waitforTimeout: 10000,
 
    connectionRetryTimeout: 120000,
  
    connectionRetryCount: 3,
 
    // services: [],
 
    framework: 'mocha',
    
 
    // specFileRetries: 1,

    // specFileRetriesDelay: 0,
 
    // specFileRetriesDeferred: false,

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}
