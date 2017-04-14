'use strict';
var cucumber = require('cucumber');
var fs = require('fs-extra');
var path = require('path');
var reporter = require('cucumber-html-reporter');




module.exports = function JsonOutputHook() {


    this.After(function(scenario, callback) {
        browser.takeScreenshot().then(function(base64png) {
            var decodedImage = new Buffer(base64png, 'base64');
            scenario.attach(decodedImage, 'image/png', function (error) {
                callback(error);
            });
        }, function(err) {
            callback(err);
        });
    });

    this.registerHandler('AfterFeatures', function(features, callback) {
        var options = {
            theme: 'foundation',
            // theme: 'bootstrap',
            // theme: 'simple',
            jsonFile: 'reports/cucumber-test-results.json',
            output: 'reports/cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "Title": "0.3.2",
                "Author": "Pramod",
                "Browser": "Chrome  56",
                "Platform": "Windows 7",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }

        };
        browser.driver.takeScreenshot().then(function (buffer) {
            return scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
        });

        reporter.generate(options);
        callback();
    });
};