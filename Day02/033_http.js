var http = require('http');
var url = require('url');
var server = http.createServer(function(req, res){
        // url.parse可以将一个完整的url地址，分为很多容易识别的部分
        // path host
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query; // 加上true之后的query就是获得对象集
    // 就可以直接打点得到这个参数
    var pathname = url.parse(req.url).pathname;

    console.log(path)
    console.log(query)
    console.log(pathname)
    res.end()
})
server.listen(3000,'localhost')