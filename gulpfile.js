var	gulp = require('gulp'),
	fs = require('fs'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	jasmine = require('gulp-jasmine');



//Helpers
function _buildTemplate(){
	var	temp  = _readFile('app.js'),
		test = _readFile('test.spec.js'),
		newTemplate = _updateTemplate(test,temp);

	_pipeToDistSpec(newTemplate);
	
}

function _readFile(filePath){
	return  fs.readFileSync(filePath,'utf8').replace(/\"use\sstrict\"\;/g,'');
}
function _updateTemplate(test,temp){
	return test.replace(/\/\/\<placeholders\scome\shere\>/g,temp);
}
function _pipeToDistSpec(template){
	fs.writeFileSync('test.dist.spec.js',template);	
}
function _clean(){
	fs.unlinkSync('app.js');
	fs.unlinkSync('test.spec.js');	
	fs.unlinkSync('test.dist.spec.js');	
}


//Tasks
gulp.task("compile",function(){
	return gulp.src('src/*')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task("link",["compile"],function(){
	return	gulp.src(['dist/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('.'));
});
gulp.task("spec link",function(){
	return	gulp.src(['tests/**/*.spec.js'])
		.pipe(concat('test.spec.js'))
		.pipe(gulp.dest('.'));
})
gulp.task("build test templates",["link","spec link"],function(){
	_buildTemplate();
});

gulp.task("running jasmine",["build test templates"],function(){
	return gulp.src('test.dist.spec.js')
		.pipe(jasmine());
});

gulp.task("clean",function(){
	_clean();
});

gulp.task("test",["running jasmine"],function(){
	_clean();
});
