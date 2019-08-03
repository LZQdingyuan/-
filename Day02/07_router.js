var http =require('http');
var server = http.createServer(function(req, res){
    // 得到url
    var userurl = req.url;
res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'})
    //正则表达式来判断此时的地址
     // substr函数判断此时的开头
      if(userurl.substr(0,9) == '/student'){
          var studentid = userurl.substr(10,-1);
            console.log(studentid)

        if(/\d{10}/.test(studentid)){
            res.end('您要查询学生信息，id为' + studentid )
        }else{
            res.end('学生学号位数不对')
        };

      }else if(userurl.substr(0,9) == '/teacher/'){
        var teacher = userurl.substr(10,-1);
        if(/\d{6}/.test(teacher)){
            res.end('您要查询老师信息，id为' + studentid )
        }else{
            res.end('老师号位数不对')
        };
      }else{
          res.end('请检查url')
      }

})

server.listen(3000, '127.0.0.1')