const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('scripts', function () {
  return gulp.src('assets/js/*.js')
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scss/*.scss', gulp.series('sass'));
  gulp.watch('assets/js/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'watch'));
gulp.task('build', gulp.series('sass', 'scripts'));