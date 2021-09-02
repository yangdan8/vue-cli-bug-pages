module.exports = {
  pages: {
    index: {
      entry: "src/index.js",
      template: "public/index.html",
      chunks: ["chunk-vendors", "index"],
    },
    login: {
      entry: "src/login.js",
      template: "public/login.html",
      chunks: ["login"],
    },
  },
};
