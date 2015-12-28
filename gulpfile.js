var gulp = require('gulp');

require('./tasks/css');
require('./tasks/jsx');
require('./tasks/serve');

gulp.task('default', ['serve', 'css', 'jsx'], function () {
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.jsx.js', ['jsx']);
});

