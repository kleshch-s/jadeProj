'use strict';
var gulp = require('gulp'),
    jade = require('jade');

// Default
gulp.task('default', ['template']);

// Watch
gulp.task('watch', function() {
    gulp.watch(['./src'], ['default'])
});

// Template
gulp.task('template', function () {
    gulp.src('./src/template/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});
