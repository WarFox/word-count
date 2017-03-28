var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

// Compiles .jsx files to .js and copies directly into the build directory
gulp.task('compile-jsx', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
      entries: ['./src/main.js'],
      debug: true,
      // defining transforms here will avoid crashing your stream
      transform: [babelify]
    });

    return b.bundle()
        .pipe(source('./script.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('lint', ['compile-jsx'], function () {

});

gulp.task('build-js', ['lint'], function () {
    return gulp.src('build/js/*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('build/js'));
});

// Minify css
gulp.task('build-css', function () {
    return gulp.src('./public/css/*.css')
        .pipe(gulp.dest('./build/css'))
        .pipe(cleanCSS())
        .pipe(rename({extname: ".min.css"}))
        .pipe(gulp.dest('./build/css'));
});

// build html
gulp.task('build-html', function() {
    return gulp.src('./public/index.html')
        .pipe(gulp.dest('./build/'));
});

// copy built js and dependencies to /dist
gulp.task('dist-js', ['build-js'], function () {
    return gulp.src('build/js/*.min.js')
        .pipe(gulp.dest('./dist/js'));
});

// Copies built CSS and dependencies to /dist
gulp.task('dist-css', ['build-css'], function () {
    return gulp.src('./build/css/*.min.css')
        .pipe(gulp.dest('./dist/css'));
});

// copy html to /dist
gulp.task('dist-html', ['build-html'], function () {
    return gulp.src('./public/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dist-images', function() {
    return gulp.src('./public/images/*')
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('clean', function (clean) {
    del(['./build', './dist'], clean);
});

// Rebuild/copy to dist when resources are changed
gulp.task('watch', function () {
    gulp.watch(['./src/**/*.js', './src/**/*.jsx'], ['dist-js']);
    gulp.watch('./public/css/*.css', ['dist-css']);
    gulp.watch('./public/index.html', ['dist-html']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('dist-js', 'dist-css', 'dist-html', 'dist-images');
});
