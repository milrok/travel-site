require("./gulp/tasks/styles");
require("./gulp/tasks/watch");

// let html = function(cb) {
//   console.log("hey ho");
//   cb();
// };
// let css = function(cb) {
//   console.log("Hey css");
//   cb();
// };
// gulp.task("html", html);
// gulp.task("css", css);

// gulp.task("default", gulp.parallel(["html", "css"]));

// gulp.task("watch", function(cb) {
//   watch("./app/index.html", gulp.parallel("html"));
//   watch("./app/index.html", gulp.parallel("css"));
//   cb();
// });
// gulp.task("default", function(done) {
//   console.log("Hooray, you created a gulp task!");
//   done();
// });

// gulp.task("html", function(done) {
//   console.log("Soemthing changed in html file...");
//   done();
// });

// gulp.task("watch", function(done) {
//   watch("./app/index.html", function() {
//     gulp.parallel("html");
//   });
//   done();
// });
