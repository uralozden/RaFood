var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-csso');


gulp.task('css', function(){
  gulp.watch('../_source/css/*', ['css']);
  return gulp.src('../_source/css/*')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('../assets/css'))
});


gulp.task('js', function() {
  gulp.watch('../_source/js/*', ['js']);
  //['./node_modules/vue/dist/vue.min.js'],
  return gulp.src(
    [
      './node_modules/vue/dist/vue.min.js',
      '../_source/js/update.js']
    )
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../assets/js/'));
});

gulp.task('default', [ 'css','js']);
