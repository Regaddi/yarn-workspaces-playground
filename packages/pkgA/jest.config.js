const { projects, ...props } = require("../../jest.config");

module.exports = {
  ...props,
  collectCoverageFrom: ["<rootDir>/index.js"],
  displayName: "pkgA",
  rootDir: __dirname
};
