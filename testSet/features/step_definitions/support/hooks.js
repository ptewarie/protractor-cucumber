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
                // var decodedImage = new Buffer(png, 'base64').toString('binary');
                var base64Image = new Buffer(png, 'binary').toString('base64');
                scenario.attach(base64Image, 'image/png');

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

    this.registerListener(JsonFormatter);
};