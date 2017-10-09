var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
uglify = require('gulp-uglify'),
htmlmin = require('gulp-htmlmin'),
cleanCss = require('gulp-clean-css'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
browserSync = require('browser-sync').create();


gulp.task('previewDist', function(){
    browserSync.init({
        notify: false,
        server: {
          baseDir: "dist"
        }
    });
});

//delete the dist folder
gulp.task('deleteDistFolder', function(){
    return del("./dist");
});


gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
    var pathsToCopy = [
        './src/**/*',
        '!./src/index.html',
        '!./src/assets/images/**',
        '!./src/assets/styles/**',
        '!./src/assets/scripts/**',
        '!./src/temp',
        '!./src/temp/**',
    ]
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'));
});

// copy images to dist folder
gulp.task('optimizeImages', ['deleteDistFolder', 'icons'], function(){
    return gulp.src(['./src/assets/images/**/*', '!./src/assets/images/icons', '!./src/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true, //optimize jpeg
        interlaced: true, //optimize gif
        multipass: true //optimize svg files
    }))
    .pipe(gulp.dest("./dist/assets/images"))
});


// gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
//     return gulp.src('./src/index.html')
//       .pipe(usemin({
//         css: [ rev() ],
//         html: [ htmlmin({ collapseWhitespace: true }) ],
//         js: [ uglify(), rev() ],
//         inlinejs: [ uglify() ],
//         inlinecss: [ cleanCss(), 'concat' ]
//       }))
//       .pipe(gulp.dest('./dist/'));
//   });

// minify html, css and javascript files; usemin will look for comments in html file
// <!-- build:css /assets/styles/styles.css -->
// <link ...>
// <!-- endbuild -->
// similarly for js files
gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function(){
    return gulp.src('./src/index.html')
    //.pipe(usemin())
    .pipe(usemin({
        css: [function(){return rev()}, function(){return cssnano()}],
        js: [function(){return rev()}, function(){return uglify()}]
    }))
    .pipe(gulp.dest("./dist"))
});


// gulp.task('minify', () => {
//     return gulp.src('src/**/*.js')
//       .pipe(babel({
//         presets: ['es2015']
//       }))
//       .pipe(uglify())
//   });

gulp.task('build', ['deleteDistFolder','copyGeneralFiles', 'optimizeImages', 'usemin']);