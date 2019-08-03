// 这个模块讲解http
var http = require('http');
// 创建一个服务器，回调函数表示接受到请求之后做的事情
var server = http.createServer(function(req, res){
    // req表示接收参数，res表示返回参数
    console.log('服务器接受到了请求'+ req.url)
    // 表示此次请求已经完成  如果不end的话，浏览器的小菊花就一直转。超时会报错
    res.end("success");

})
// 监听端口
server.listen(3000, 'localhost');

// node 省去了web容器
// REPL环境
//  