const {src, dest, watch, series} = require('gulp');

/* Sökvägar */
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/**/*.jpg"

}

/* Testfunktion */
function testGulp(cb) {
    console.log("Hello from Default task");
    cb();
}

/* Kopiera HTML */
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub')
    );
}

function wathTask() {
    watch(files.htmlPath,
        copyHTML
    );
}

/* Default task */
exports.default = series (
    testGulp,
    copyHTML,
    wathTask
);
