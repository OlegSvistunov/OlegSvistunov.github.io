var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');


gulp.task('default', function() {

    gulp.src('js/src/**/*.js')
        .pipe(uglify('script.min.js'))
        .pipe(gulp.dest('js/dist'));

    gulp.src(['!css/src/reset.css', 'css/src/*.css'])
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css/dist'));

    gulp.src('css/src/reset.css')
        .pipe(cleanCSS())
        .pipe(concat('reset.min.css'))
        .pipe(gulp.dest('css/dist'));

    gulp.src('img/src/*.{png,jpg,gif}')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('img/dist'));
});
