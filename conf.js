exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['pages/todo-spec.js'],
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            'args': [ '--start-maximized', 'disable-infobars']
        }
    },
    suites: {
        login: 'pages/login-facebook.js',
        evento: 'pages/evento-facebook.js'
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
}