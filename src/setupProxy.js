const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app,request){
  app.use(
      createProxyMiddleware('/v1/search/movie.json', {
        target:"https://openapi.naver.com",
        changeOrigin: true,     
        
      })
  )
  app.use(
    createProxyMiddleware('/v1/search/movie.json', {
      target:"https://openapi.naver.com",
      changeOrigin: true,     
      
    })
)
};