const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PugPlugin = require('pug-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
  mode: "production",
  entry: './src/index.pug',
  output: {
    path: path.join(__dirname, 'dist/'),

    filename: 'script/main.js'
  },
  plugins: [
    new ESLintPlugin(),
    new TerserWebpackPlugin(),
    new CssMinimizerPlugin(),

    new PugPlugin({
      pretty: true, // formatting HTML, should be used in development mode only
      extractCss: {

        filename: 'style/main.css'
      },
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  module: {
    rules: [{
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
};