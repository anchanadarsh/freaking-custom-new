var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('minifyimg', function () {
    gulp.src('img/*').pipe(plumber()).pipe(imagemin()).pipe(gulp.dest('dist/img/'));
});

gulp.task('watchimg', function () {
    gulp.watch('img/*', ['minifyimg']);
});

gulp.task('uglifyjs', function () {
    gulp.src('js/*.js').pipe(plumber()).pipe(uglify()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('dist/js/'));
});

gulp.task('fonts', function () {
    gulp.src('fonts/*').pipe(plumber()).pipe(gulp.dest('dist/fonts/'));
});

gulp.task('watchfonts', function () {
    gulp.watch('fonts/*', ['fonts']);
});

gulp.task('sass', function () {
    gulp.src('scss/*.scss').pipe(plumber()).pipe(sass()).pipe(gulp.dest('css/'));
});

gulp.task('watchsass', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('uglifycss', function () {
    gulp.src('css/*.css').pipe(plumber()).pipe(autoprefixer('last 2 versions')).pipe(minifycss()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('dist/css/'));
});

gulp.task('watchjs', function () {
    gulp.watch('js/*.js', ['uglifyjs']);
});

gulp.task('watchcss', function () {
    gulp.watch('css/*.css', ['uglifycss']);
});

gulp.task('watch', ['watchfonts', 'watchimg', 'watchjs', 'watchcss', 'watchsass']);
gulp.task('default', ['uglifyjs', 'uglifycss', 'sass', 'fonts', 'minifyimg', 'watch']);
