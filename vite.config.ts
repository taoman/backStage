const path = require("path");

module.exports = {
  alias: {
    "/@/": path.resolve("src"),
    vue: "vue/dist/vue.esm-bundler.js",
  },
  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
  // otherwise, may assets 404 or visit with index.html
  base: "/start-vue3/",
  assetsDir: "",
};
