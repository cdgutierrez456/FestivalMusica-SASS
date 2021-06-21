const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

// Funcion de compilacion de SASS
function css() {
    return src('./src/scss/app.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(dest('./build/css'));
}

function watchArchivos() {
    watch('./src/scss/**/*.scss', css)
}


exports.css = css;
exports.watchArchivos = watchArchivos;

 