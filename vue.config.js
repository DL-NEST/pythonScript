module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      nodeIntegration: true
    }
  },
  devServer: {
    port: 8088,
    proxy: {
      '/api': {
        target: 'http://localhost:80', // 后端接口地址
        changeOrigin: true, // 是否允许跨越
        pathRewrite: {
          '^/api': ''
        }
      },
      '/test': {
        target: 'http://localhost:2048', // 后端接口地址
        changeOrigin: true, // 是否允许跨越
        pathRewrite: {
          '^/test': ''
        }
      }
    }
  }
}
