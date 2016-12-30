
var gulp = require('gulp');
//var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

//gulp.task('default', function() {
  // place code here
//});

gulp.task('js-lint-compile', function(){
  return gulp.src('*.js') // read all of the files  .js extension
//    .pipe(jshint()) // run their contents through jshint
//    .pipe(jshint.reporter('default')) // report any findings, returned from jshint
    .pipe(concat('concat.js')) // concatenate the file contents' in a file titled 'concat.js'
    .pipe(gulp.dest('dest/js')) // write that file to the dest/js directory
    .pipe(rename('concat.min.js')) // now rename the file in memory to 'concat.min.js'
    .pipe(uglify()) // run uglify (for minification) on 'concat.min.js'
    .pipe(gulp.dest('dest/js')); // write concat.min.js to the dest/js file
});

gulp.task('default', ['js-lint-compile']);

var ReactApp = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

ReactDOM.render(<ReactApp />, document.getElementById('app'));


module.exports = {

  entry: "./index.js",

  output: {

    filename: "./src/bundle.js"

  },

  module: {

    loaders: [

      {

        test: /\.jsx?$/,

        exclude: /(node_modules)/,

        loader: 'babel',

        query: {

          presets: ['react', 'es2015']

        }

      }

    ]

  }

};
