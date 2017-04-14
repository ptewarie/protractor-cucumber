var Cucumber = require('cucumber');
fs = require('fs-extra');
path = require('path');





module.exports = function JsonOutputHook() {


    this.registerHandler('AfterFeatures', function(features, callback) {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'reports/cucumber-test-results.json',
            output: 'reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);
        callback();
    });
};