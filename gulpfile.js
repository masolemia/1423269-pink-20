const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const htmlMinimizer = require("gulp-html-minimizer");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const imagemin =require("gulp-imagemin");
const webp = require("gulp-webp");
const del = require("del");
const uglify = require('gulp-uglify-es').default;

//HTML
const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlMinimizer({}))
    .pipe(gulp.dest("build"))
    .pipe(sync.stream());
}

exports.html = html;

// Styles

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;


//JS min

const jsMin = () => {
  return gulp.src("source/js/script.js")
    .pipe(uglify({}))
    .pipe(rename("script.min.js"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest('build/js'));
}

exports.jsMin = jsMin;

//Images

const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 2}),
      imagemin.mozjpeg({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}

exports.images = images;

//Optimization webP

const createWebp = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.webp = createWebp;

//Build

const copy = () => {
  return gulp.src ([
    "source/fonts/**/*.{woff,woff2}",
    "source/*.ico",
  ],{
    base: "source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

const clean = () => {
  return del("build");
};

exports.clean = clean;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("html"));
  gulp.watch("source/img/**/*.{png,jpg}", gulp.series(images, webp));
  gulp.watch("source/js/*.js", gulp.series("jsMin"));
}

const build = gulp.series(
  clean,
  copy,
  styles,
  html,
  jsMin,
  images,
  createWebp
);

exports.build = build;

exports.default = gulp.series(
  build, server, watcher
);
