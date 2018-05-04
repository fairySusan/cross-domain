var express = require('express');
var app = express();

app.get('/b.html',function(req,res){
    res.sendFile(__dirname + '/' + 'b.html');
});
app.get('/getProxyData',function(req,res){
    res.send("跨域获取到的数据");
});
var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})