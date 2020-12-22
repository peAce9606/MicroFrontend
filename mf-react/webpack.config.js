const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mf",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "svg-url-loader",
            },
          ],
        },
      ],
    },
  });
};
