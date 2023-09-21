const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://your-render-server-url.onrender.com', // Replace with your Render server URL
      changeOrigin: true,
    })
  );
};
