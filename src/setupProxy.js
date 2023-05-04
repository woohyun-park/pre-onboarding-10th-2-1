const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://api.clinicaltrialskorea.com", // 비즈니스 서버 URL 설정
      changeOrigin: true,
    })
  );
};
