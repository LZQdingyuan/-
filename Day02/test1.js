// 试着做一个表单提交
var http = require('http');
var url = require('url')
var server = http.createServer(function(req, res){
    var queryObj = url.parse(req.url, true).query;
    var { name } =queryObj
    var { age } = queryObj
    var { sex } = queryObj
    console.log("name: " + name);
    console.log('age: ' + age);
    console.log('sex' + sex)

    res.end("服务器收到了"+ name + age + sex);

})
// 监听端口
server.listen(3000, 'localhost');

// node 省去了web容器
// REPL环境
//  