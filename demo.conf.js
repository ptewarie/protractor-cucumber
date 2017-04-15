exports.config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome'
        // 'platform': 'ANY'
        // 'version': '11'
    },

    specs: [
        './testSet/features/*.feature'
    ],

    baseURL: 'http://localhost:8080/',


    cucumberOpts: {
        strict:true,
        require: [
            './testSet/features/step_definitions/*.js',
            'testSet/features/step_definitions/support/*.js'],
        tags: true,
        format: "json:./reports/cucumber-test-results.json",
        // format: 'pretty',
        profile: false,

        'no-source': true
    }


};