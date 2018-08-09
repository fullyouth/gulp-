var gulp = require('gulp');
var rename = require('name');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var Config  = require('./gulpfile.config.js');

function dev(){
    gulp.task('html:dev',function(){
        return gulp.src('../src/*.html').pipe(gulp.dest('../dist/')).pipe(reload({
            stream: true
        }));
    })
}

module.exports = dev;