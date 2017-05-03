var gulp=require("gulp");
var uglify=require("gulp-uglify");
var css=require("gulp-uglifycss");
var less=require("gulp-less");
var connect=require("gulp-connect");
var concat=require("gulp-concat");

gulp.task("connect",function () {
    connect.server({
        root:"./",
        port:8888,
        livereload:true,
    });
})
gulp.task("uglify",function () {
    gulp.src("./js/*.js").pipe(uglify()).pipe(gulp.dest("./build/js")).pipe(connect.reload());
})
gulp.task("less",function () {
    gulp.src("./less/*.less").pipe(less()).pipe(css()).pipe(gulp.dest("./build/css")).pipe(connect.reload());
})

gulp.task("html",function () {
    gulp.src("./*.html").pipe(connect.reload());
})

gulp.task("watch",function () {
    gulp.watch("./js/*.js",["uglify"]);
    gulp.watch("./less/*.less",["less"]);
    gulp.watch("./*.html",["html"]);
})
gulp.task("default",["connect","watch"]);