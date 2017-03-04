var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	compass = require('gulp-compass'),
	cp = require('child_process');

// Compile les CSS dès qu'on détecte un changement dans les fichiers Sass
gulp.task('compile', function() {
	return gulp.src('_source/assets/sass/**/*.scss')
	.pipe(compass({
		css: '_source/assets/css',
		sass: '_source/assets/sass',
		config_file: '_source/config.rb'
	}))
	.pipe(gulp.dest('_deploy/assets/css'))
	.pipe(browserSync.reload({ stream: true}));
});

// Reconstruit Jekyll dès qu'on détecte un changement
gulp.task('build', function() {
	cp.exec('jekyll build --watch', function(err, stdout, stderr) {
		console.log(stdout, stderr, err);
	});
});

// Sert le site avec browserSync
gulp.task('serve', ['build'], function() {
	browserSync.init({ server: { baseDir:'_deploy/' } });
	gulp.watch('_source/assets/sass/**/*.scss', ['compile']);
	//gulp.watch('_deploy/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);