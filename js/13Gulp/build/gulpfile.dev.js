"use strict";

var _gulp = require("gulp");

function moveHtml() {
  return (0, _gulp.src)('app/index.html').pipe((0, _gulp.dest)('build/'));
}

exports.moveHtml = moveHtml;