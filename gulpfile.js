var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	pump = require("pump");

gulp.task('compress', function(c) {
	pump([
		gulp.src('_source/assets/js/**/*.js'),
		uglify(),
		gulp.dest('_deploy/assets/js')
	], c);
});

gulp.task('default', ['compress']);