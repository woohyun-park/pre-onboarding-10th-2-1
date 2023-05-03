import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.clinicaltrialskorea.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api/v1": "",
      },
    })
  );
};
