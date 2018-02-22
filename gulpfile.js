var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('uglifyjs', function () {
    gulp.src('js/*.js').pipe(uglify()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('dist/js/'));
});

gulp.task('uglifycss', function () {
    gulp.src('css/*.css').pipe(minifycss()).pipe(rename({
        suffix: '.min'
    })).pipe(gulp.dest('dist/css/'));
});

gulp.task('watchjs', function () {
    gulp.watch('js/*.js', ['uglifyjs']);
});

gulp.task('watchcss', function () {
    gulp.watch('css/*.css', ['uglifycss']);
});

gulp.task('default', ['watchjs', 'watchcss']);
