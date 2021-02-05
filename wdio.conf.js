const { UtamWdioService } = require('wdio-utam-service');
const PORT = process.env.PORT || 8080;

exports.config = {
    runner: 'local',
    specs: ['src/**/__wdio__/*.spec.ts'],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    logLevel: 'info',
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: `http://localhost:${PORT}`,
    
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,

    automationProtocol: 'webdriver',
    
    // Test runner services
    services: ['chromedriver', [UtamWdioService, {}]],
    framework: 'jasmine',
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
    reporters: ['spec'],
    //
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 60000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    onPrepare() {
        // Hook before wdio is ready
    },
}
