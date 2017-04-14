'use strict';

var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor;


    gulp.task('shoppingBasket', function () {
        gulp.src(['/noNeedForThis'])
            .pipe(protractor({
                configFile: 'demo.conf.js',
                args: [
                    '--cucumberOpts.tags', '@shoppingBasket']
            }))
            .on('error', function (e) {
                throw e;
            });
    });

    gulp.task('E2E', function () {
        gulp.src(['/noNeedForThis'])
            .pipe(protractor({
                configFile: 'demo.conf.js',
                args: [
                    '--cucumberOpts.tags', '@E2E']
            }))
            .on('error', function (e) {
                throw e;
            });
    });