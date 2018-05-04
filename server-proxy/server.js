var express = require('express');
var app = express();
var axios = require('axios');
app.get('/a.html',function(req,res){
    res.sendFile(__dirname + '/' + 'a.html');
});
app.get('/getData',function(req,res){
  let url = 'http://127.0.0.1:8081/getProxyData'
  axios.get(url,{
      headers:{
          referer:'http://127.0.0.1:8081/',
          host:'127.0.0.1:8081'
      }
  }).then(response => {
      res.send(response.data);
  }).catch(err => {
    res.send("跨域请求失败")
  })
})
var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})