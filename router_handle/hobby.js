const db = require('../db')
exports.getHobbyList = (req,res) => {
	const sql = 'SELECT * FROM campus_community.hobby;'
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.length < 1) return res.cc('查询出错！')
		res.send({status:0,message:'查询成功',data:result})
	})
}

// 查询hobby文章列表的接口处理函数
exports.getHobbyNote = (req,res) => {
	const {hobby_id,page,total} = req.body
	const sql = `SELECT * FROM campus_community.hobby_note,campus_community.user where campus_community.hobby_note.hobby_id='${hobby_id}' && campus_community.hobby_note.user_id=campus_community.user.id order by date desc limit ${(page-1)*10},${((page-1)*10)+total}`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		res.send({status:0,message:'查询成功',data:result})
	})
}

//查询文章信息接口的处理函数
exports.getArticleInfo = (req,res) => {
	const { id } = req.params
	const sql = `select * from campus_community.hobby_note,campus_community.user where campus_community.hobby_note.id=${id} && campus_community.hobby_note.user_id=campus_community.user.id`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.length !== 1) return res.cc('查询失败，没有该条数据！')
		res.send({status:0,message:'查询成功！',data:result})
	})
}