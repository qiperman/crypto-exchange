module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://qiperman.github.io/crypto-exchange/'
    : '/',
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
}
