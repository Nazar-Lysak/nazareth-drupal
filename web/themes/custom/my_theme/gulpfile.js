let gulp = require('gulp'),
  scss = require("gulp-sass")(require("sass"));

gulp.task('scss', async function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'watch'));