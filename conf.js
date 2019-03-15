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
        homepage: 'tests/e2e/homepage/**/*Spec.js',
        mensagem: 'tests/e2e/contact_search/**/*Spec.js'
    },
    onPrepare: function () {
        browser.ignoreSynchronization = true;
    }
}