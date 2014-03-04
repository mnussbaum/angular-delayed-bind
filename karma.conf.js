module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: "",
    browsers: ["PhantomJS"],
    files: [
      "bower_components/angular/angular.js",
      "bower_components/angular-mocks/angular-mocks.js",
      "src/delayed_bind.js",
      "test/*.js"
    ],
    frameworks: ["jasmine"],
    logLevel: config.LOG_INFO,
    port: 8080,
    singleRun: true
  });
};
