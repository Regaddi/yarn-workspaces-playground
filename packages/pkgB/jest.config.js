const { projects, ...props } = require("../../jest.config");

module.exports = {
  ...props,
  collectCoverageFrom: ["<rootDir>/index.js"],
  displayName: "pkgB",
  rootDir: __dirname
};
