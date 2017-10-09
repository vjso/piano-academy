var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
    // path to webpack config is relative to this file
    webpack(require('../../webpack.config'), function(err, stats) {
        if(err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    }); 
});