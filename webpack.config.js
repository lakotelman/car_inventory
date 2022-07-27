const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config({ path: ".env" }).parsed;
  // create a nice object from the env variable
  const envKeys = Object.keys(env).reduce(
    (prev, next) => {
      prev.env[`${next}`] = JSON.stringify(env[next]);
      return prev;
    },
    { env: {} }
  );

  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
    },
    devServer: {
      static: path.resolve(__dirname, "./dist"),
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ process: envKeys }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(jpg|png|webp|svg)$/,
          use: {
            loader: "url-loader",
          },
        },
      ],
    },
  };
};
