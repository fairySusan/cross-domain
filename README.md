<h1>跨域的前后端方法总结</h1>
<p>浏览器的同源策略：</p>
<p>1.不能通过ajax或axios的方法去请求不同源的资源</p>
<p>2.浏览器的不同源的框架之间不能进行js的交互操作</p>

<p>实验都是用node.js搭建的本地服务器，这里的不同源都是设置的端口号不同</p>
下载express框架
npm init
npm install express --save
开启本地服务
node server.js
<h1>前端跨域</h1>
<h2>一 window.name跨域</h2>
<p>b.html去获取a.html的数据</p>
<p>a.html http://127.0.0.1:8081</p>
<p>b.html http://127.0.0.1:8080</p>
<p>要通过iframe来当中间桥梁</p>
<h2>二 window.postMessage跨域</h2>
<p>b.html去获取a.html的数据，但是只能在a页面显示</p>
<p>a.html http://127.0.0.1:3001</p>
<p>b.html http://127.0.0.1:3000</p>
<p>适合于不同窗口的iframe之间的跨域</p>
<h2>三 document.domain跨域</h2>
<p>b.html去获取a.html的数据</p>
<p>a.html http://127.0.0.1:8081</p>
<p>b.html http://127.0.0.1:8080</p>
<P>设置两个页面的document.domain相等，这里是document.domain = 127.0.0.1</P>
<h1>后端跨域</h1>
<h2>一 CORS跨域</h2>
<p>a.html http://127.0.0.1:8080</p>
<p>a.html要跨域请求的url：http://127.0.0.1:8081</p>
<P>在8081端口的后端设置允许8080端口跨域的代码</p>
<p>app.all('*', function (req, res, next) {<br>
    res.header("Access-Control-Allow-Credentials", true)<br>
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080")<br>
    res.header("Access-Control-Allow-Headers", "X-Requested-With")<br>
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")<br>
    res.header("X-Powered-By", ' 3.2.1')<br>
    res.header("Content-Type", "application/json;charset=utf-8")<br>
    next()<br>
  })<br>
</p>
<h2>二 服务器代理跨域</h2>
<p>a.html去请求后端，后端去请求不同源的目的服务器，然后再把请求到的数据传给a.html</p>
<p>a.html http://127.0.0.1:8080</p>
<p>后端要请求的目的服务器：http://127.0.0.1:8081</p>
<p>后端用的axios请求</p>
<p>npm install axios --save</p>
<p>前端小白，若文中有错误的还请指正，虚心接受，继续努力\(^o^)/~，加油\(^o^)/~</p>



