var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('*.txt')
    .pipe(concat('result.txt'))
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

