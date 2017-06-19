var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	htmlmin = require('gulp-htmlmin'),
	cp = require('child_process'),
	jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll',
	message = {
		jekyllBuild: '<span style="color:grey">Running</span> $ jekyll build'
	};

// Jekyll build
gulp.task('jekyll-build', function(done) {
	browserSync.notify(message.jekyllBuild);
	return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

// Jekyll, compress le HTML et recharge browserSync
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
	browserSync.reload();
});

// Attend jekyll-build, puis démarre le serveur
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_deploy'
		}
	});
});

// Compile Sass
gulp.task('sass', function() {
	return gulp.src('_source/_sass/**/*.scss')
		/*.pipe(sass({
			includePaths: ['scss'],
			onError: browserSync.notify
		}))
		.pipe(prefix({ browsers: ['last 15 versions', '> 1%', 'ie 8'], cascade: false }))
		*/
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('_deploy/assets/css'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('_deploy/assets/css'));
});

// Compresse les fichiers js du dossier _deploy
gulp.task('js', function(){
	return gulp.src('_deploy/assets/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('_deploy/assets/js'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('_deploy/assets/js'));
});

// Compresse les fichiers html du dossier _deploy
gulp.task('html', function(){
	return gulp.src('_deploy/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('_deploy'))
		.pipe(browserSync.reload({ stream: true }))
		.pipe(gulp.dest('_deploy'));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('_source/_sass/**/*.scss', ['sass']);
	gulp.watch('_source/assets/**/*.js', ['js']);
	gulp.watch('_source/**/*.html', ['jekyll-rebuild']);
});

// Default
gulp.task('default', ['browser-sync', 'watch']);
