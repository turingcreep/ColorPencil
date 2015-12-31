var	gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task("compile",function(){
	return gulp.src('src/*')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});
