const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app2",
    projectName: "app2",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: "app2",
        filename: "remoteEntry.js",
        exposes: {
          // Expose the main component of app1
          './App': './src/app2-app2.tsx', // Adjust this path to your main component file
        },
        remotes: {
          rootConfig: "root_config@http://localhost:8080/remoteEntry.js",
        },
        shared: {
          rxjs: {
            singleton: true,
            eager: true,
          },
          react: {
            singleton: true,
            requiredVersion: '^17.0.0', // Adjust as per your setup
          },
          "react-dom": {
            singleton: true,
            requiredVersion: '^17.0.0', // Adjust as per your setup
          },
        },
      }),
    ],
  });
};
