// ////////////////////////////////////////////////
// Require
// // /////////////////////////////////////////////
const fileinclude = require('gulp-file-include');
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    del = require('del'),
    runSequence = require('run-sequence'),
    reload = browserSync.reload;

// ////////////////////////////////////////////////
// scss Tasks
// // /////////////////////////////////////////////
gulp.task('scss:compile', function() {
    gulp.src('./app/css/**/*.scss')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({ outputStyle: 'compressed' }))
        .on('error', plugins.sass.logError)
        .pipe(plugins.autoprefixer({
            browsers: ['last 10 versions', 'ie >= 8', '> 1%'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css/'))
        .pipe(reload({ stream: true }));
});


// ////////////////////////////////////////////////
// Browser Sync Tasks
// // /////////////////////////////////////////////
gulp.task('serve', function() {
    browserSync.init({
        proxy: "multidots.local",
        port: 3000,
    });
    gulp.watch("./app/**/*.scss", ['scss:compile']);
    gulp.watch("./app/**/*.+(php|html)").on('change', browserSync.reload);
    gulp.watch(["./app/**/*.js", "!./app/**/*.raw.js", "!./app/**/*.plugin.js"]).on('change', browserSync.reload);
});




// ////////////////////////////////////////////////
// Error Handler
// // /////////////////////////////////////////////
function errorlog(err) {
    console.error(err.message);
    this.emit('end');
}

// ////////////////////////////////////////////////
// Images Tasks
// // /////////////////////////////////////////////
gulp.task('images:optimize', function() {
    return gulp.src('./app/images/**/*.+(jpg|png|gif)')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('./app/images'));
});
// ////////////////////////////////////////////////
// BUILD Tasks
// // /////////////////////////////////////////////
gulp.task('build:removefolder', function() {
    return del([
        'build/**'
    ]);
});
gulp.task('build:copy', function() {
    gulp.src([
            './app/.htaccess'
        ])
        .pipe(gulp.dest('./build/'));
    return gulp.src([
            './app/**/*',
            '!app/**/*.psd',
            '!app/**/*.scss',
            '!app/**/*.raw.js'
        ])
        .pipe(gulp.dest('./build/'));
});

gulp.task('build:removeUnwantedFolderFromBuild', function() {
    del.sync(['build/scss/**']);
});

gulp.task('js:build', function() {
    return gulp.src('./build/js/**/*.js')
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./build/js'));
});
gulp.task('css:build', function() {
    return gulp.src('./build/css/**/*.css')
        .pipe(plugins.autoprefixer({
            browsers: ['last 10 versions', 'ie >= 8', '> 1%'],
            cascade: false
        }))
        .pipe(plugins.cleanCss({ debug: true, keepSpecialComments: 0 }, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('./build/css'));
});


// ////////////////////////////////////////////////
// Default Tasks
// // /////////////////////////////////////////////
gulp.task('default', ['serve']);

gulp.task('build', function() {
    return runSequence(
        'scss:compile',
        'build:copy',
        'build:removeUnwantedFolderFromBuild',
        'css:build',
        'js:build'
    );
});

