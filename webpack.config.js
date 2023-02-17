const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index : './static/src/index.js',
    applyevent : './static/src/applyevent.js',
    localStorage : './static/src/localStorage.js',
    script :'./static/src/script.js',
  },
  output: {
    path: path.resolve(__dirname, 'static', 'public'),
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
