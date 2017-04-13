exports.config = {

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
        // require: './testSet/features/*.feature',
        require: './testSet/features/step_definitions/*.js',

        tags: false,
        format: 'pretty',
        //format: "json:./node_modules/cucumber-protractor-report/report_template/cucumber_report.json",

        profile: false,
        'no-source': true
    },

    resultJsonOutputFile: '../testSet/features/reporting/report.json'
   /* afterLaunch : function () {
        var path = require('path');
        var reporter = require('cucumber-html-reporter');
        var fs = require('fs');
        //var jsonReport = path.resolve(__dirname,'cucmber-json-report');
        //var htmlReport = path.resolve(jsonReport,'report.html');
       var jsonFile= 'test/report/cucumber_report.json';
           var output= 'test/report/cucumber_report.html';
        var options = {
            theme: 'bootstrap',
            jsonFile: jsonFile,
            output: output,
            reportSuiteAsScenarios: true
        };
        return reporter.generate(options);

    }*/
};