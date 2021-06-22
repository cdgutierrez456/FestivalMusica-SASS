const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

// Funcion de compilacion de SASS

const paths = {
    imagenes: './src/img/**/*',
    scss: './src/scss/**/*.scss'
}

function css() {
    return src(paths.scss)
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(dest('./build/css'));
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
    watch(paths.scss, css)
}


exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, imagenes, versionWebp, watchArchivos);
 