/* Laddar plugins */
const browserSync = require('browser-sync').create();
const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const imgmin = require('gulp-imagemin');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');


/* Sökvägar */
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*"
}

/* Kopiera HTML */
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

/* Sammanslå och minifiera JS filer */
function jsTask() {
    return src(files.jsPath)
        .pipe(sourcemaps.init())
            .pipe(concat('main.js'))
            .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('pub/js')
    );
}

/* Sammanslå och minifiera CSS filer */
function cssTask() {
    return src(files.cssPath)
        .pipe(sourcemaps.init())
            .pipe(concat('styles.css'))
            .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('pub/css')
    );
}

/* Minifiera bilder */
function imgTask() {
    return src(files.imgPath)
        .pipe(imgmin([
            imgmin.mozjpeg({ quality: 75, progressive: true})
        ]))
        .pipe(dest('pub/img')
        );
}

/* Browsersync, updatera webbsidan vid ändringar */
function reload() {
     browserSync.init({
        server: {
            baseDir: './pub'
        }
    });
    watch(files.htmlPath, copyHTML).on('change', browserSync.reload);
    watch(files.cssPath, cssTask).on('change', browserSync.reload);
    watch(files.jsPath, jsTask).on('change', browserSync.reload);
    watch(['pub', 'pub/css', 'pub/js']).on('change', browserSync.reload);
}

function watchTask() {

    watch([files.htmlPath, files.jsPath, files.cssPath]),
        parallel(copyHTML, jsTask, cssTask, imgTask
    );

    
}

/* Default task */
exports.default = series (
    parallel(copyHTML, jsTask, cssTask, imgTask),
    reload,
    watchTask
);
