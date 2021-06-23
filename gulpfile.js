const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const soursemaps = require('gulp-soursemaps');

// Funcion de compilacion de SASS

const paths = {
    imagenes: './src/img/**/*',
    scss: './src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css() {
    return src(paths.scss)
            .pipe(soursemaps.init())
            .pipe(sass())
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(soursemaps.write('.'))
            .pipe(dest('./build/css'));
}

function javascript() {
    return src(paths.js)
            .pipe(concat('bundle.js'))
            .pipe(dest('./build/js'));
}

function imagenes() {
    return src(paths.imagenes)
            .pipe(imagemin())
            .pipe(dest('./build/img'))
            .pipe(notify({message: 'Imagen minificada'}));
}

function versionWebp() {
    return src(paths.imagenes)
            .pipe(webp())
            .pipe(dest('./build/img'))
            .pipe(notify({message: 'Imagen v.webp ok'}));
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
}


exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, javascript, imagenes, versionWebp, watchArchivos);
 