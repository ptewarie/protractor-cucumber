exports.config = {
//
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
        // 'platform': 'ANY'
        // 'version': '11'
    },

    // Spec patterns are relative to this directory.
    specs: [
        './testSet/features/*.feature'
    ],

    baseURL: 'http://localhost:8080/',


    cucumberOpts: {
        strict:true,
        require: [
            './testSet/features/step_definitions/*.js',
            'testSet/features/step_definitions/support/hooks.js' ],
        tags: true,
        format: 'pretty',
        profile: false,
        'no-source': true
    }


};