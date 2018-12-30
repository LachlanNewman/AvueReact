var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// create a default task and just log a message
gulp.task('scripts', function () {
	return gulp.src('./assets/js/**/*.js')
	// Minify the file
		.pipe(uglify())
		// Output
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./assets/js'))
});