/*
 * @Author: heinan
 * @Date: 2021-06-02 11:49:24
 * @Last Modified by: heinan
 * @Last Modified time: 2021-06-02 11:53:06
 */
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
