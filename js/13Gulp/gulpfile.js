const { src , dest, watch } = require('gulp');
const browserSync           = require('browser-sync').create();
const sass                  = require('gulp-sass')(require('sass'));
const postcss               = require('gulp-postcss'); 
const autoprefixer          = require('autoprefixer');
 

function styles(){
  const plugins = [
    autoprefixer()
   
  ]
  return src('app/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(dest('build/css'))
}
exports.styles=styles;

function serve(){
browserSync.init({
    server: {
      baseDir:"./build/"
    }
});
  watch('app/**/*.html', moveHtml).on('change', browserSync.reload);
  watch('app/**/*.scss', styles).on('change', browserSync.reload);
};

exports.serve=serve;

function moveHtml(){
  return src('app/**/*.html')
     .pipe(dest('build/'))
}

exports.moveHtml = moveHtml;
 