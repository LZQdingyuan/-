//require 表示引包 就是引用自己的特殊功能
var http = require('http');
var fs = require('fs')

// 创建服务器 参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(req, res){
    if(req.url == '/fang'){
        fs.readFile("./test.html",function(err,data){
        //req表示请求，res 表示响应
        // 设置Http头部， 状态码是200 文件类型是html 字符集是utf-8
        res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
        res.end(data);
        })

    }else if (req.url == '/yuan'){
        fs.readFile("./test2.html",function(err,data){
            //req表示请求，res 表示响应
            // 设置Http头部， 状态码是200 文件类型是html 字符集是utf-8
            res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
            res.end(data);
            })
    }else if (req.url == '/01'){
        fs.readFile("./0.jpg",function(err,data){
            //req表示请求，res 表示响应
            // 设置Http头部， 状态码是200 文件类型是html 字符集是utf-8
            res.writeHead(200, {"Content-type": "image/jpg"});
            res.end(data);
            })
        }else{
        res.writeHead(404, {"Content-type": "text/html;charset=UTF-8"});
        res.end("嘻嘻嘻，这个是404页面");
    }

})

 // 运行服务器  监听3000端口，端口号可以随意更改
 server.listen(3000, '127.0.0.1')

 // nodejs没有web容器的概念  但是又顶层路由的概念
//  让nodejs提供一个静态服务都很难