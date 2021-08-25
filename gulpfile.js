const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
//const imagemin = require('gulp-imagemin');
const imagemin = require('gulp-tinypng');
/*
const options = {
  imagemin: { optimizationLevel: 3, progressive: true, interlaced: true }
 
};
*/
// Sass Task
function scssTask(){
  return src('src/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/main', { sourcemaps: '.' }));
}

// Windows CSS Task
function cssTask(){
    return src('src/css/windows7.css', { sourcemaps: true })
      .pipe(postcss([cssnano()]))
      .pipe(dest('dist/windows', { sourcemaps: '.' }));
  }

// Windows JavaScript Task
function jsTask(){
  return src('src/js/windows7.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist/windows', { sourcemaps: '.' }));
}


function imageTask(){
  return src( 'images/**/*', { sourcemaps: true } )
      .pipe(imagemin('Xrb05m0VJR3h3y8xWcQKClhtPcTGW41M'))
      .pipe( dest('dist/images', { sourcemaps: '.' }))
};


// Default Gulp task
exports.default = series(
  scssTask,
  cssTask,
  jsTask,
  imageTask
);