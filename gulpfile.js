'use strict';
var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

// Default
gulp.task('default', ['template', 'style']);

// Watch
gulp.task('watch', function() {
    gulp.watch([
        './src/template/*.jade',
        './src/template/**/*.jade',
        './src/style/main.scss'
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

// Style
gulp.task('style', function () {
    gulp.src('./src/style/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/style'));
});
