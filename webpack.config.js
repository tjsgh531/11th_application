const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index : './src/index.js',
    applyevent : './src/applyevent.js',
    localStorage : './src/localStorage.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
}
