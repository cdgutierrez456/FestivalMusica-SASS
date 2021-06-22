const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');

// Funcion de compilacion de SASS
function css() {
    return src('./src/scss/app.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(dest('./build/css'));
}

function imagenes() {
    return src('./src/img/**/*')
            .pipe(imagemin())
            .pipe(dest('./build/img'));
}

function watchArchivos() {
    watch('./src/scss/**/*.scss', css)
}


exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

 