// vue.config.js


module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 全局变量文件路径，只有一个时可将数组省去
          resources: 'src/assets/css/global.scss'
        })
        .end()
    })

    //路径配置
    const path = require("path");

    function resolve(dir) {
      return path.join(__dirname, dir);
    }
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assetsimg", resolve("src/assets/images"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));

  },
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        /* 目标代理服务器地址 */
        changeOrigin: true,
        /* 允许跨域 */
        pathRewrite: {
          "^/api": "http://localhost:3000/" /*重新改写地址，原请求地址不含/api,所以替换为""*/
        }
      },
    },
  },




}