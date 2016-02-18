var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');




gulp.task('styles', function() {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/stylesheets/css/'))
});

gulp.task('minify-css', function() {
  return gulp.src('dist/stylesheets/css/screen.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(rename('screen.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
//Watch task
gulp.task('default',function() {
    gulp.watch('src/scss/**/*.scss',['styles']);
    gulp.watch('dist/stylesheets/css/screen.css', ['minify-css']);
});