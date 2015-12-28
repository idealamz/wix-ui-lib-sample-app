//var gulp = require('gulp');
//var rename = require("gulp-rename");
//var change = require('gulp-change');
//var jsx = require('gulp-jsx');
//
//var AMD_PREFIX = 'define([], function() { return function () {\n return ';
//var AMD_SUFFIX = '};\n});';
//
//gulp.task('jsx', function() {
//    gulp.src('src/**/*.jsx.js')
//        .pipe(jsx({
//            factory: 'React.createElement'
//        }))
//        //.pipe(change(function (content) {
//        //    return [AMD_PREFIX, content, AMD_SUFFIX].join('');
//        //}))
//        .pipe(rename(function (path) {
//            path.basename += ".target";
//            path.extname = ".js";
//        }))
//        .pipe(gulp.dest('src'));
//});

var gulp = require('gulp');
var rename = require("gulp-rename");
var react = require('gulp-react');

gulp.task('jsx', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(react())
        .pipe(rename(function (path) {
            path.basename += ".jsx";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('src'));
});