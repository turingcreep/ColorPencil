var	gulp = require('gulp'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat');

gulp.task("compile",function(){
	return gulp.src('src/*')
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist'));
});
