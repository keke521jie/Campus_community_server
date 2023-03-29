const db = require('../db')

exports.addHobbyNote = (req,res) => {  //发布hobby的处理函数
	const { hobby_id, title, content, img_list } = req.body
	const {id,user_pic,nickname} = req.user
	const sql = `insert into campus_community.hobby_note(title,content,user_id,hobby_id,img_list,author_pic,user_name) values('${title}','${content}',${id},${hobby_id},'${img_list}','${user_pic}','${nickname}')`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.affectedRows !== 1) return res.send({status:1,message:'发布失败！'})
		res.send({status:0,message:'发布成功',data:result})
	})
}