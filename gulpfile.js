(function() {

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();

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

}());
