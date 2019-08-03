//require 表示引包 就是引用自己的特殊功能
var http = require('http');
// 创建服务器 参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function(treq, res){
    //req表示请求，res 表示响应
    // 设置Http头部， 状态码是200 文件类型是html 字符集是utf-8
    res.writeHead(200, {"Content-type": "text/html;charset=UTF-8"});
    res.end('哈哈哈，我买了三个iPhone' + (1+2+3+4)  + 's')
})

 // 运行服务器  监听3000端口，端口号可以随意更改
 server.listen(3000, '127.0.0.1')

 // nodejs是服务端的程序， 写的js语句， 都将运行再服务器上，返回给客户的，都是已经处理好的纯Html
// 当修改程序，必须终端当前运行的服务器，重新node一次，刷新才能显示
// 你会发现，在本地写个js 不能直接运行，但是有个js，可以通过node运行，node就是个js的执行环境

// 我们现在要抛弃了一个服务器，这个服务器的脚本，要以.js结尾，用node命令运行这个js文件
// nodejs没有根目录的概念，因为他没有任何的web容器
