const gulp	= require('gulp'),
	  sass 	= require('gulp-sass'),
	  minifyCss = require('gulp-minify-css'),
	  watch = require('gulp-watch');

gulp.task('sass', ()=>{
	gulp.src('src/style/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/style/css'))
})

gulp.task('minifyCss', ()=>{
	gulp.src('src/style/css/main.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('src/style/minify'))
})

gulp.task('watch', ()=>{
	gulp.watch('src/style/main.scss', ['sass'])
	gulp.watch('src/style/css/main.css', ['minifyCss'])
})