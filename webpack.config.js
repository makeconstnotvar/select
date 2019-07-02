
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    script: "./app/index.jsx",
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/build",
    filename: "[name].js"
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    //new BundleAnalyzerPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-proposal-object-rest-spread"],
              ["@babel/plugin-proposal-decorators", {legacy: true}],
              ["@babel/plugin-proposal-class-properties", {loose: true}],
            ]
          }
        }
      },



    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
  /*
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    reasons: false,
    usedExports: false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "commons"
    },
  }*/
};
