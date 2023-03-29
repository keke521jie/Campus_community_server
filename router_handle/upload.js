const db = require("../db")
const path = require('path') //cv
const fs = require('fs');
const config = require('../config')

exports.uploadUser_pic = (req, res) => {   //上传头像的接口处理函数
	let imgFile = req.file; //获取图片上传的资源
	let tmp = imgFile.path; //获取临时资源
	let ext = path.extname(imgFile.originalname); //利用path模块获取 用户上传图片的 后缀名
	let newName = "" + (new Date().getTime()) + Math.round(Math.random() * 10000) + ext; //给用户上传的图片重新命名 防止重名
	let newPath = "../public/user_pic/" + newName; //给图片设置存放目录  提前给当前文件夹下建立一个   images文件夹  ！！！！
	let fileData = fs.readFileSync(tmp); //将上传到服务器上的临时资源 读取到 一个变量里面
	fs.writeFileSync(path.join(__dirname, newPath), fileData); //重新书写图片文件  写入到指定的文件夹下
	const sql = `update user set user_pic='${config.IMG_BASE_URL}user_pic/${newName}' where id=${req.user.id}`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.affectedRows !== 1) return res.cc('修改失败！')
		res.send({status:0,message:'修改成功！',user_pic:`${config.IMG_BASE_URL}user_pic/${newName}`})
	})
}

exports.uploadHobbyImg = (req,res) => {  //上传hobbyimg接口的处理函数
	let imgFile = req.file; //获取图片上传的资源
	let tmp = imgFile.path; //获取临时资源
	let ext = path.extname(imgFile.originalname); //利用path模块获取 用户上传图片的 后缀名
	let newName = "" + (new Date().getTime()) + Math.round(Math.random() * 10000) + ext; //给用户上传的图片重新命名 防止重名
	let newPath = "../public/hobby_pic/" + newName; //给图片设置存放目录  提前给当前文件夹下建立一个   images文件夹  ！！！！
	let fileData = fs.readFileSync(tmp); //将上传到服务器上的临时资源 读取到 一个变量里面
	fs.writeFileSync(path.join(__dirname, newPath), fileData); //重新书写图片文件  写入到指定的文件夹下
	res.send({status:0,message:'上传成功！',data:`${config.IMG_BASE_URL}hobby_pic/${newName}`})
}

exports.uploadGoodsImg = (req,res) => {  //上传goodsimg接口的处理函数
	let imgFile = req.file; //获取图片上传的资源
	let tmp = imgFile.path; //获取临时资源
	let ext = path.extname(imgFile.originalname); //利用path模块获取 用户上传图片的 后缀名
	let newName = "" + (new Date().getTime()) + Math.round(Math.random() * 10000) + ext; //给用户上传的图片重新命名 防止重名
	let newPath = "../public/goods_pic/" + newName; //给图片设置存放目录  提前给当前文件夹下建立一个   images文件夹  ！！！！
	let fileData = fs.readFileSync(tmp); //将上传到服务器上的临时资源 读取到 一个变量里面
	fs.writeFileSync(path.join(__dirname, newPath), fileData); //重新书写图片文件  写入到指定的文件夹下
	res.send({status:0,message:'上传成功！',data:`${config.IMG_BASE_URL}goods_pic/${newName}`})
}

exports.uploadNewsImg = (req,res) => {  //上传newsimg接口的处理函数
	let imgFile = req.file; //获取图片上传的资源
	let tmp = imgFile.path; //获取临时资源
	let ext = path.extname(imgFile.originalname); //利用path模块获取 用户上传图片的 后缀名
	let newName = "" + (new Date().getTime()) + Math.round(Math.random() * 10000) + ext; //给用户上传的图片重新命名 防止重名
	let newPath = "../public/news_pic/" + newName; //给图片设置存放目录  提前给当前文件夹下建立一个   images文件夹  ！！！！
	let fileData = fs.readFileSync(tmp); //将上传到服务器上的临时资源 读取到 一个变量里面
	fs.writeFileSync(path.join(__dirname, newPath), fileData); //重新书写图片文件  写入到指定的文件夹下
	res.send({status:0,message:'上传成功！',data:`${config.IMG_BASE_URL}news_pic/${newName}`})
}

