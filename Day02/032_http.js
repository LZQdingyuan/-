// req中能使用的东西
// 最关键是req.url 表示用户的请求url地址。
// 所有的路由设计，都通过req.url实现
// 我们比较关心的不是拿到url而是识别这个url
// 识别url用新模块  第一个是url模块 第二个是querystring模块呀



    var http = require('http')
    var server = http.createServer(function(req, res){
        console.log(req.url)
    })
    server.listen(3000,'127.0.0.1');