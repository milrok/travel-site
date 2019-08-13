let gulp = require("gulp");
let watch = require("gulp-watch");

gulp.task("watch", function() {
  // watch("./app/index.html", function() {
  //   gulp.start("html");
  // });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
