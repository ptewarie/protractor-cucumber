'use strict';
var cucumber = require('./');
var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor;


    gulp.task('jenkins', function () {
        gulp.src(['/noNeedForThis'])
            .pipe(protractor({
                'configFile': 'demo.conf.js',
                'steps': 'testSet/features/fruit.feature',
                'format': 'summary',
                'tags': '~@shoppingBasket'
        // --cucumberOpts.tags @shoppingBasket
            }))
            .on('error', function (e) {
                throw e;
            });    
    });

