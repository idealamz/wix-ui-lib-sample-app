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