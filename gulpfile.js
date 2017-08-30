(function() {

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();
  var gulpif = require('gulp-if');
  var useref = require('gulp-useref');
  var embedTemplates = require('gulp-angular-embed-templates');
  var uglify = require("gulp-uglify");

  gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: '../',
        middleware: [
          function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');
            next();
          }
        ]
      },
      startPath: '/marvel-movies/src/'
    });

    gulp.watch([
      'src/**/*.html',
      'src/**/*.js',
      'src/**/*.css'
    ]).on('change', browserSync.reload);
  });

  gulp.task('build', function() {
    return gulp.src('src/index.html')
      .pipe(useref({
        transformPath: function(filePath) {
          return filePath.replace('src', '');
        }
      }))
      .pipe(gulpif('*.js', embedTemplates({
        basePath: __dirname + '/'
      })))
      .pipe(gulpif('*.js', uglify()))
      // .pipe(gulpif('*.css', minifyCss()))
      .pipe(gulp.dest('build/'));
  });

}());
