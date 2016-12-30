var gulp         = require('gulp');
var babel        = require('gulp-babel');
var browserSync  = require('browser-sync');
var concat       = require('gulp-concat');
var eslinting    = require('gulp-eslint');
var notify       = require('gulp-notify');
var reload       = browserSync.reload;

var jsFiles = {
  vendor: [
    
  ],
  source: [
    '*.js',
    '*.jsx',
  ]
};

// Lint JS/JSX files
gulp.task('eslinting', function() {
  return gulp.src(jsFiles.source)
    .pipe(eslinting({
      baseConfig: {
        "ecmaFeatures": {
           "jsx": true
         }
      }
    }))
    .pipe(eslinting.format())
    .pipe(eslinting.failAfterError());
});

// Watch JS/JSX  files
gulp.task('watch', function() {
  gulp.watch('*.{js,jsx,html}').on("change",reload);
});

// BrowserSync
gulp.task('browsersync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    online: false,
    notify: false,
  });
});

gulp.task('default', ['eslinting', 'browsersync', 'watch']);


