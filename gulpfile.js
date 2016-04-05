var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function() {
  watch('./public/css/**/*.sass', function (event) {
        console.log('File ' + event.path + ' was changed');
        gulp.src('./public/css/**/*.sass')
            .pipe(sass({ includePaths : ['./public/css/tools'] }))
			.pipe(autoprefixer())
            .pipe(gulp.dest('./public/src/'));
    });
});

gulp.task('js', function() {
    watch('./public/js/**/*.js', function (event) {
        console.log('File ' + event.path + ' was changed');
		gulp.src('./public/js/**/*.js')
            .pipe(concat('main.js'))
			//.pipe(uglify())
            .pipe(gulp.dest('./public/src/'));
    });
  
});
