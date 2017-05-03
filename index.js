const gulp = require('gulp');
const yargs = require('yargs');
const imagemin = require('gulp-imagemin');

const imageminConfig = [
    imagemin.jpegtran({
        progressive: true
    }),
    imagemin.gifsicle(),
    imagemin.optipng(),
    imagemin.svgo(
        {
            plugins: [
                {
                    removeTitle: true
                }
            ]
        }
    )
];

const minifyImagesCli = () => {
    const imageSrc = yargs
        .options('images-src', {
            describe: 'glob pattern to match images to be minified',
            demand: true,
        })
        .check((argv) => {
            if (argv.imagesSrc) {
                return true;
            }
            throw new Error('images-src must be a valid glob pattern');
        })
        .argv.imagesSrc;

    return gulp.src(imageSrc, {base: '.'})
        .pipe(imagemin(imageminConfig))
        .pipe(gulp.dest('.'));
};

module.exports = {
    imageminConfig,
    minifyImagesCli,
};
