//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PugPlugin = require('pug-plugin');
const path = require('path');
//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.pug',
    output: {
        path: path.join(__dirname, 'dist/'),

        filename: 'script/main.js'
    },
    plugins: [
        //new MiniCssExtractPlugin(),
        new TerserWebpackPlugin(),
        new CssMinimizerPlugin(),
       // new HtmlWebpackPlugin()
       new PugPlugin({
        pretty: true, // formatting HTML, should be used in development mode only
        extractCss: {
          // output filename of CSS files
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
        rules: [
            // use: [{
            //     loader: MiniCssExtractPlugin.loader,
            //     options: {
            //         esModule: true
            //     }
            // }, 'css-loader'],
            // test: /\.css$/
            {
                test: /\.pug$/,
                loader: PugPlugin.loader, 
              },
              {
                test: /\.css$/,
                use: ['css-loader']
              },
        ]
    }
};