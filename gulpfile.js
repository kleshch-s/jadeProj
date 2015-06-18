'use strict';
var gulp = require('gulp'),
    jade = require('gulp-jade');

// Default
gulp.task('default', ['template']);

// Watch
gulp.task('watch', function() {
    gulp.watch([
        './src/template/*.jade',
        './src/template/**/*.jade'
    ], ['default'])
});

// Template
gulp.task('template', function () {
    gulp.src('./src/template/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
});
