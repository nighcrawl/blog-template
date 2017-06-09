var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	htmlmin = require("gulp-htmlmin");

gulp.task('js', function(){
	return gulp.src('_source/assets/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('_deploy/assets/js'));
});

gulp.task('html', function(){
	return gulp.src('_deploy/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('_deploy'));
});

gulp.task('default', ['js', 'html']);