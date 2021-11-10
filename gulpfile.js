var gulp = require("gulp"),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps');

gulp.task("styles", function () {
    return gulp.src('./src/styles/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/styles/css'));
});



gulp.task('watch', function() {
    gulp.watch('./src/styles/scss/**/*.scss', gulp.series('styles'));
});