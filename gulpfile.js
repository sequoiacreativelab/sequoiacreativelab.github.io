var gulp        = require('gulp');
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var uglify      = require('gulp-uglify');
var pump        = require('pump');
var jekyll      = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages    = { jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll serve'};

/**
* Optimize images
 */
gulp.task('images', function(cb){
    return gulp.src(['_static/images/*.*', '_static/images/**/*.*', '_static/images/**/**/*.*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('build/images')).on('error', cb)
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build', 'js'], function() {
    browserSync({
        proxy: "localhost:4000",
        files: ['_site/css/*.css',
                '_site/*.html',
                '_site/**/*.html',
                '_site/uploads/*.png',
                '_site/uploads/*.jpg',
                '_site/uploads/*.svg',
                '_site/uploads/*.gif',
                '_site/js/*.js',
                '!_site/node_modules/*.html',
                '!_site/node_modules/**/*.html'],
        notify: false

    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_static/sass/styles.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify,
            outputStyle: 'compressed'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Compile files from
 */
gulp.task('js', function (cb) {
  pump([
      gulp.src('_static/js/main.js'),
      uglify(),
      gulp.dest('js')
    ],
    cb
  );
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_static/sass/*.scss','_static/sass/**/*.scss'], ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
    gulp.watch(['_static/js/*.js', '_static/js/**/*.js'], ['js']);
});


/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'images', 'watch']);
