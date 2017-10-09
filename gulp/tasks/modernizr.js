/* 
gulp-modernizr for creating modernizr.js script for inspecing browser features.
Modernizr.js will look for various features that browser can support and can modify styles and javascript files accordingly.
We want to look for svg support in browsers for svg sprites 
*/

var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

/* We only want css and javascript features to be checked instead of checking all features to speed up downloading */
gulp.task('modernizr', function(){
    return gulp.src(['./src/assets/styles/**/*.css','./src/assets/scripts/**/*.js'])
    .pipe(modernizr({
        "options" : [
            "setClasses" //we only want to set classes by modernizr based on the features it finds in browser
        ]
    }))
    .pipe(gulp.dest('./src/temp/scripts/'));
});