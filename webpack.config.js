const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const settings = {
  development: {
    sourcemap: true,
    open: true,
    publicPath: "/",
  },
  production: {
    sourcemap: false,
    open: false,
    publicPath: "./",
  },
};

const isProduction = () => process.env.NODE_ENV === "production";
const getSettings = (key) => {
  if (isProduction()) {
    return settings["production"][key];
  } else {
    return settings["development"][key];
  }
};
/*-------------------------------------------------*/

module.exports = {
  // entry file(s)
  entry: "./src/index.js",

  // output file(s) and chunks
  output: {
    library: "UserList",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, "docs"),
    filename: "index.js",
    publicPath: getSettings("publicPath"),
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: getSettings("sourcemap"),
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: getSettings("sourcemap"),
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: getSettings("sourcemap"),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],

  // development server configuration
  devServer: {
    // must be `true` for SPAs
    historyApiFallback: true,

    // open browser on server start
    open: getSettings("open"),
  },
};
