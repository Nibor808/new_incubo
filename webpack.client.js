const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const MCSSEPlugin = require('mini-css-extract-plugin');
const OCSSAPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

const DEV = process.env.DEPLOY_MODE === 'development';

const baseDir = path.resolve(__dirname, './src');

let outputDir;
let mode;

if (DEV) {
  outputDir = path.resolve(__dirname, './build-dev');
  mode = 'development';
} else {
  outputDir = path.resolve(__dirname, './build-prod');
  mode = 'production';
}

const entry = `${baseDir}/index.js`;

const plugins = [
  new Dotenv({
    path: './.env',
    safe: false
  }),
  new webpack.EnvironmentPlugin(['DEPLOY_MODE']),
  new webpack.ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery'
  }),
  new MCSSEPlugin({
    chunkFilename: DEV ? '[name].css' : '[name].[contentHash].css'
  }),
  new AssetsPlugin({
    prettyPrint: true,
    fullPath: false,
    path: path.resolve(__dirname, 'src')
  }),
  new OCSSAPlugin({}),
  new HTMLPlugin({ template: baseDir + '/index.html' })
];

const rules = [
  {
    test: /\.js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      MCSSEPlugin.loader,
      'css-loader'
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      MCSSEPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|woff|ttf|eot)/,
    loader: 'url-loader',
    options: {
      limit: 10240
    }
  },
  {
    test: /\.svg$/,
    loader: 'svg-url-loader',
    options: {
      limit: 10240,
      noquotes: true,
    }
  }
];

if (!DEV) {
  rules.push(
    {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'image-webpack-loader',
      enforce: 'pre'
    }
  );
}

module.exports = {
  mode,
  target: 'web',
  entry: {
    bundle: entry
  },
  output: {
    path: outputDir,
    filename: DEV ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      Bootstrap: path.resolve(__dirname, 'node_modules/bootstrap/dist/js'),
      jQuery: path.resolve(__dirname, 'node_modules/jquery/dist')
    },
    extensions: ['*', '.js', '.json', '.jsx'],
    enforceExtension: false,
    modules: [
      'node_modules'
    ]
  },
  devtool: DEV ? 'source-map' : false,
  plugins: plugins,
  module: {
    rules: rules,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },
    occurrenceOrder: !DEV,
    concatenateModules: !DEV,
    mergeDuplicateChunks: !DEV,
    removeEmptyChunks: true,
    removeAvailableModules: true
  },
  watchOptions: {
    aggregateTimeout: 2000,
    ignored: /node_modules/
  }
};
