const sassResourcesLoader = require("craco-sass-resources-loader");
const sassInject = require.resolve("./src/styles/reset.scss"); // 변수 파일 경로

module.exports = {
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: sassInject,
      },
    },
  ],
};
