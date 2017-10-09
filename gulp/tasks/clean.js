var gulp = require('gulp'),
del = require('del');

//delete the dist folder
gulp.task('deleteDistFolder', function(){
    return del("./dist");
});

//delete the generated files and folders
gulp.task('deleteTempfolder', function(){
    return del("./src/temp");
});

//delete the node modules
gulp.task('deleteNodeModules', function(){
    return del("./node_modules");
});

//delete the generated css sprite that is copied to modules
gulp.task('deleteCopiedCssSprite', function(){
    return del(["./src/assets/styles/modules/_sprite.css", "./src/assets/images/sprites"]);
});

gulp.task('clean', ['deleteDistFolder','deleteTempfolder', 'deleteNodeModules', 'deleteCopiedCssSprite']);