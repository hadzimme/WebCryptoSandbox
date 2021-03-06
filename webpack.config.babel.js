import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: [
    'babel-polyfill',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WebCrypto Sample',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'babel-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'www',
    inline: true,
    hot: true,
  },
}
