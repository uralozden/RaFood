var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');


var sourceLess = './source/less';
var targetCss = './source/css';

gulp.task('css', function(){
  gulp.watch('../_source/css/*', ['css']);
  return gulp.src('../_source/css/*')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('../assets/css'))
});

gulp.task('default', [ 'css' ]);
