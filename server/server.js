//引入express 
var express = require("express")
var mongoose = require("mongoose")

const db_url = 'mongodb://localhost:27017/books'

//连接数据库 
mongoose.connect(db_url)
mongoose.connection.on("connected",function(){
	console.log("数据库已经连接 ")
})


const Book = mongoose.model('user',new mongoose.Schema({
	name:{type:String,require:true},
	price:{type:Number,require:true}
}))

// Book.create({
// 	name:'jpm',
// 	price:20
// },function(err,doc){
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(doc)
// 	}
// })


// 删除
// Book.remove({name:'jpm'},function(err,doc){
// 	console.log(doc)
// })

// 更新
// Book.update({name:"jpm"},{'$set':{price:99}},function(err,doc){
// 	console.log(doc)
// })


// 查找
// Book.find({},function(err,doc){
// 	console.log(doc)
// })

// 查找 返回一条
// Book.findOne({},function(err,doc){
// 	console.log(doc)
// })


//实例化一个express对象 
const app = express()


// 返回数据hello world
app.get("/",function(req,res){
	res.send("<h1>Hello world</h1>")
})

//返回json 
app.get("/data",function(req,res){
	// 查找
	Book.find({},function(err,doc){
		res.json(doc)
	})
})

// 监听9093端口
app.listen(9093,function(){
	console.log("连接到9093端口")
})