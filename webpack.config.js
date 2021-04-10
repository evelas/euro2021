const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

const jsLoaders = () => {
  const loaders = ['ts-loader'];

  if (isDev) {
    
  }
  return loaders;
};

module.exports = {
 
    mode: 'development',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
      port: 8080,
      hot: true,
      open: true,
    },
    module: {
      rules: [
          {
              test: /\.tsx?$/,
              use: jsLoaders(),
              exclude: '/node_modules/'
          }
      ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ESLintPlugin({
          extensions: ['ts']
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'src/favicon.ico'),
              to: path.resolve(__dirname, 'build'),
            },
          ],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
              removeComments: isProd,
              collapseWhitespace: isProd,
            }
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ]
}