const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { files, folders } =  require('./utilsWebpack/folderWebpack');
const portFinderSync = require('portfinder-sync');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackInit = {
  mode: 'development',
  resolve: {
    extensions: ['.js']
  },
  entry: {
    app: [files.main]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [
          //path.join(__dirname, '../src'), // + any other paths that need to be transpiled
          /\/node_modules\/quill/,
        ]
      }
    ]
  },
  output: {
    path: folders.build,
    filename: '[name].js'
  },
  devServer: {
    contentBase: folders.build,
    inline: true,
    host: '127.0.0.1',
    port: portFinderSync.getPort(3000),
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: files.src_index,
      filename: files.build_index
    }),
    new CopyWebpackPlugin([
      { from: folders.src_components, to: folders.build_components },
      { from: folders.src_views, to: folders.build_views },
      { from: folders.src_assets, to: folders.build_assets },
      { from: files.manifest, to: folders.build },
      { from: files.sw, to: folders.build }
    ])
  ]
};

module.exports = webpackInit;

