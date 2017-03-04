var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	compass = require('gulp-compass'),
	imagemin = require('gulp-imagemin')
	cp = require('child_process');

// Minifie les images contenues dans le dossier _source/assets/img
gulp.task('images', function() {
	return gulp.src('_source/assets/img/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin())
	.pipe(gulp.dest('_deploy/assets/img'))
	.pipe(browserSync.reload({ stream: true}));
});

// Minifie les images contenues dans le dossier _source/contents
gulp.task('contents', function() {
	return gulp.src('_source/contents/**/*.+(png|jpg|jpeg|gif|svg)')
	.pipe(imagemin())
	.pipe(gulp.dest('_deploy/contents'))
	.pipe(browserSync.reload({ stream: true}));
});

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
	gulp.watch('_source/contents/**/*', ['contents']);
	gulp.watch('_source/assets/img/**/*', ['images']);
	gulp.watch('_source/assets/sass/**/*.scss', ['compile']);
	//gulp.watch('_deploy/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['contents', 'images', 'build', 'serve']);