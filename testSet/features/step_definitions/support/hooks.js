var Cucumber = require('cucumber');
fs = require('fs-extra');
path = require('path');

var JsonFormatter = Cucumber.Listener.JsonFormatter();

var reportsDir = path.join(__dirname, '../../../../reports');

var reportFile = path.join(reportsDir, 'cucumber-test-results.json');

module.exports = function JsonOutputHook() {

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            browser.takeScreenshot().then(function (png) {
                var decodedImage = new Buffer(png, 'base64').toString('binary');
                scenario.attach(decodedImage, 'image/png');

                callback();
            });
        } else {
            callback();
        }
    });

    JsonFormatter.log = function (json) {
        fs.open(reportFile, 'w+', function (err, fd) {
            if (err) {
                fs.mkdirsSync(reportsDir);
                fd = fs.openSync(reportFile, 'w+');
            }

            fs.writeSync(fd, json);

            console.log('json file location: ' + reportFile);
        });
    };

    //logic to create HTML page, currently not working

    // var Report = require('cucumber-html-report');
    //
    // var options = {
    //     source:    './reports/cucumber-test-results.json' // source json
    //     // dest:      './reports',          // target directory (will create if not exists)
    //     // name:      'report.html'        // report file name (will be index.html if not exists)
    //     // template:  'mytemplate.html',    // your custom mustache template (uses default if not specified)
    //     // title:     'Cucumber Report',    // Title for default template. (default is Cucumber Report)
    //     // component: 'My Component'       // Subtitle for default template. (default is empty)
    // };
    //
    // var report = new Report(options);
    // report.createReport();


    this.registerListener(JsonFormatter);
};