const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);

const jsLoaders = () => {
  const loaders = ['ts-loader'];

  if (isDev) {
    // eslint-loader перешел в eslint-webpack-plugin
  }
  return loaders;
};

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'build'),
      publicPath: '/dashboard/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],

    },
    devtool: isDev ? 'source-map' : false,
    devServer: {

      port: 8080,
      openPage: 'dashboard/',
      hot: true,
      publicPath: "/dashboard",
      open: true,
      // for BrowserRouter
      historyApiFallback: {
        index: '/dashboard',
      }
    },
    module: {
      rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {},
              },
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(woff|woff2|ttf|eot)$/,
            use: 'file-loader?name=fonts/[name].[ext]!static'
          },
          {
            test: /\.(png|jpe?g|gif|jp2|webp)$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          },
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
              from: path.resolve(__dirname, 'public'),
              to: path.resolve(__dirname, 'build'),
            },
          ],
        }),
        new MiniCssExtractPlugin({
          filename: filename('css'),
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
              removeComments: isProd,
              collapseWhitespace: isProd,
            }
        }),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
    ]
}
