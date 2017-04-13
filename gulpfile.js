'use strict';

var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor;


    gulp.task('jenkins', function () {
        gulp.src(['/noNeedForThis'])
            .pipe(protractor({
                configFile: 'demo.conf.js',
                args: [
                    '--cucumberOpts.tags', '@orderFruit']
            }))
            .on('error', function (e) {
                throw e;
            });
    });