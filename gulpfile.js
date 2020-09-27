/* Laddar plugins */
const browserSync = require('browser-sync').create();
const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const imgmin = require('gulp-imagemin');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');


/* Sökvägar */
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*",
    sassPath: "src/**/*.scss"
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

/* Konvertera Sass filer */
function sassTask() {
    return src(files.sassPath)
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
            .pipe(concat('main.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('pub/css'))
}

/* Sammanslå och minifiera CSS filer */
function cssTask() {
    return src(files.cssPath)
        .pipe(sourcemaps.init())
            .pipe(concat('main.css'))
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
    watch(files.sassPath, sassTask).on('change', browserSync.reload);
    watch(['pub', 'pub/css', 'pub/js']).on('change', browserSync.reload);
}

function watchTask() {

    watch([files.htmlPath, files.jsPath, files.cssPath, files.sassPath]),
        parallel(copyHTML, jsTask, cssTask, imgTask, sassTask
    );

    
}

/* Default task */
exports.default = series (
    parallel(copyHTML, jsTask, cssTask, imgTask, sassTask),
    reload,
    watchTask
);
