// // 这个模块讲解htto
// var http = require('http');
// // 创建一个服务器，回调函数表示接受到请求之后做的事情
// var server = http.createServer(function(req, res){
//     // req表示接收参数，res表示返回参数
//     console.log('服务器接受到了请求'+ req.url)
//     //  表示设置一个响应头
//     // res.writeHead(200,{'Content-type':'text/html;chartset=UTF8'})

//     res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});

//     // 表示此次请求已经完成  如果不end的话，浏览器的小菊花就一直转。超时会报错

//     res.end("<h1>我是</h1>");

// })
// // 监听端口
// server.listen(3000, 'localhost');

// // node 省去了web容器
// // REPL环境
// // 


var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200,{'Content-type': 'text/http; chartset=UTF-8'})
    res.end()
}).listen(3000,'localhost');
// 其中，必需输出的是字符串，或者缓冲区的数据，不然会报错