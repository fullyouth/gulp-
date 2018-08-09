
var pkg = require('./package.json');
var inds = pkg.independents;

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var concatdir = require('gulp-concat-dir');
var dirconcat = require('gulp-dir-concat');
var rename = require('gulp-rename');
var header = require('gulp-header');
var del = require('del');
var gulpif = require('gulp-if');
var minimist = require('minimist');
var zip = require('gulp-zip');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 转移src下所有html文件到dist/html文件夹下
gulp.task('html',function(){
    return gulp.src('./src/**/*.html').pipe(gulp.dest('./dist/html'));
});

// 转移css
gulp.task('css',function(){
    return gulp.src('./src/**/*.css').pipe(minify()).pipe(concat('all.css')).pipe(gulp.dest('./dist/css'));
});

// 转移js
gulp.task('js',function(){
    return gulp.src('./src/**/*.js').pipe(concatdir({ext:'.css'})).pipe(gulp.dest('./dist/js'));
});

gulp.task('default',['html','css','js']);


