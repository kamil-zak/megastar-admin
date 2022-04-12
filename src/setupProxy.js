// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    /\/(api|files)/,
    createProxyMiddleware({
      target: 'http://localhost:5555',
      changeOrigin: true,
    }),
  );
};
