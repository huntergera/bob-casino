var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	axis = require('axis'),
	connect = require('gulp-connect'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task('connect', function() {
	connect.server({
		port: 8887,
		livereload: true
	});
});

gulp.task('styl', function(){
	return gulp.src('styl/style.styl')
	.pipe(stylus({use: [axis()]}))
	.pipe(autoprefixer(['last 20 versions', '> 1%', 'ie 8', 'ie 9'], { cascade: true }))
	.pipe(cssnano())
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('css/'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('js/'))
	.pipe(connect.reload());
});

gulp.task('html', function () {
	return gulp.src('index.html')
	.pipe(connect.reload());
})

gulp.task('watch', function() {
	gulp.watch('styl/style.styl', ['styl']);
	gulp.watch('src/*.js', ['js']);
	gulp.watch('index.html', ['html']);
});

gulp.task('default', ['connect', 'html','styl' , 'js', 'watch']);