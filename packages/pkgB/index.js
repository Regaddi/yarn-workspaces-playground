const pkgA = require("pkgA");

module.exports = function() {
  console.log("hello from pkgB");
  pkgA();
};
