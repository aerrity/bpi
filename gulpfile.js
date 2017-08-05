var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');
var path = require('path');
var browserSync = require('browser-sync').create();

var jsDir = 'js';
var targetJSDir = 'dist/js';

// Minify JS and save to target JS directory 
gulp.task('minify-js', function () {
    gulp.src(jsDir + '/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest(targetJSDir))
    .pipe(notify('JS minified'));
});


//watch for changes in certain dirs and run tasks
gulp.task('watch', function () {
    gulp.watch(jsDir + '/*.js', ['minify-js']);
});

// Static browser-sync server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: [targetJSDir+'/*.js','./*.html',]
    });
});

// Default tasks to run with gulp
gulp.task('default', ['minify-js', 'browser-sync', 'watch']);
