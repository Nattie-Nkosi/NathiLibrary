const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "nathiLib.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "NathiLib",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
