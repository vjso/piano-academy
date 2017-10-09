require('../base/project-settings');

var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
optionalComments = require('postcss-optional-comments');

gulp.task('styles', function() {
  return gulp.src('./src/assets/styles/styles.css')
  //return gulp.src(srcDir + stylesDir + '/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer, optionalComments]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./src/temp/styles'));
    //.pipe(gulp.dest(destDir + stylesDir));
});
