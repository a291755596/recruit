//引入express 
var express = require("express")

//实例化一个express对象 
const app = express()


// 返回数据hello world
app.get("/",function(req,res){
	res.send("<h1>Hello world</h1>")
})

//返回json 
app.get("/data",function(req,res){
	res.json({"name11":"jackwang"})
})

// 监听9093端口
app.listen(9093,function(){
	console.log("连接到9093端口")
})