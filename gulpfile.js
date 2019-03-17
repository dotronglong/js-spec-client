const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');

const paths = {
    scripts: {
        dir: 'src',
        build: 'dist',
        src: 'src/**/*.ts',
    },
    tests: {
        dir: 'test',
        build: 'dist',
        src: 'test/**/*.spec.js'
    },
    tsconfig: 'tsconfig.json'
};

function clean() {
    return del([paths.scripts.build]);
}

function tsc() {
    return gulp.src(paths.scripts.src)
        .pipe(ts.createProject(paths.tsconfig)())
        .pipe(gulp.dest(paths.scripts.build));
}

function test() {
    return gulp.src([paths.tests.src], {read: false})
        .pipe(mocha({reporter: 'list', exit: true}))
        .on('error', (e) => {});
}

exports.clean       = clean;
exports.tsc         = tsc;
exports.test        = test;
const build         = gulp.series(clean, tsc);

gulp.task('build', build);
gulp.task('test:force', gulp.series(clean, tsc, test));
gulp.task('default', build);