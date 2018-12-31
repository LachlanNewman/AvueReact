var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Task which minifys js files and concats them to all.js
gulp.task('scripts', function () {
	return gulp.src('./assets/js/**/*.js')
	// Minify the file
		.pipe(uglify())
		// Output
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./assets/js'))
});