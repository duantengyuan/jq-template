const { src, dest, parallel,watch } = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const rem = require('gulp-rem');
const autoprefixer = require ( 'gulp-autoprefixer' );
const replace = require('gulp-string-replace');
function browser() {
  css()
  watch('src/style/**/*.styl', parallel(css,reload))
  watch('src/js/**/*.js', parallel(js,reload))
  watch('src/**/*.pug',parallel(html,reload))
  browserSync.init({server: { baseDir: "./build/" , host: '0.0.0.0' }});
}

function html() {
  return src('src/*.pug').pipe(pug()).pipe(dest('build/'))
}

function css() {
  return src('src/style/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({ cascade : true ,remove : true })).pipe(rem({ width: 375, unit: 'px' }))
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
  const buffer = ``;
  return src('src/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('build/js', { sourcemaps: true }))
}

function build(cb) {
  html();
  css();
  js();
  cb();
}

function reload(cb) {
  browserSync.reload()
  cb()
}

exports.default = browser
exports.build = build