const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "single-spa-app",
    projectName: "root-config",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: "root_config",
        library: { type: "var", name: "root_config" },
        filename: "remoteEntry.js",
        exposes: {
          "./eventBus": "./src/eventBus.ts",
        },
        shared: {
          rxjs: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      }),
    ],
  });
};
