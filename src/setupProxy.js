const {createProxyMiddleware} = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ 
    target: 'https://test.manage.xinjiaoyu.com',//后台服务器地址
    changeOrigin: true,
    pathRewrite: {
    '^/api': '',
    },}))
};