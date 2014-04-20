var expand = require('grunt').file.expand;

module.exports = function(lineman) {
  var app = lineman.config.application;
  return {
      loadNpmTasks : ["grunt-contrib-cljs"],
      cljs: {
          dev: {
              options: {
                src: "app/cljs",
                dest: "generated/js/app_cljs.js"
              }
          },
          dist: {
              options: {
                src: "app/cljs",
                dest: "dist/js/app_cljs.js"
              }
          }
      },
      prependTasks: {
          common: app.prependTasks.common.concat("cljs:dev"),
          dist: app.prependTasks.common.concat("cljs:dist")
    }
  };
};
