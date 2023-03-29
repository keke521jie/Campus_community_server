const db = require('../db')
exports.getNewslist = (req,res) => {
	const sql = `SELECT * FROM campus_community.news_list;`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.length < 1) return res.cc('查询出错！')
		res.send({status:0,message:'查询成功',data:result})
	})
}

exports.getNews = (req,res) => {
	const {news_id,page,total} = req.body 
	const sql = `SELECT * FROM campus_community.news,campus_community.user where campus_community.news.user_id = campus_community.user.id && campus_community.news.news_type_id = ${news_id} order by campus_community.news.date desc limit ${(page-1)*10},${((page-1)*10)+total};`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		res.send({status:0,message:'查询成功',data:result})
	})
}