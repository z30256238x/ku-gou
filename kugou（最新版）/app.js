const express=require("express");
const app=express();
var server=app.listen(3000,(req,res)=>{
	console.log("服务器已启动！！！");
});
//托管静态文件
app.use(express.static("public"));
//引入中间件bodyParser
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
//引入路由器；
////引入路由器；//引入路由器；//引入路由器；//引入路由器；//引入路由器；//引入路由器；//引入路由器；//引入路由器；