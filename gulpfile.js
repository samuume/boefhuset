/**
 * Created by zongy on 26-02-2017.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulp.dest('src/app/assets/stylesheets'));
});

gulp.task('serve', ['build-css'], function() {
  gulp.watch('scss/**/*.scss', ['build-css']);
});
gulp.task('watch', ['serve']);
