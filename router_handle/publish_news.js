const db = require('../db')

exports.addNewsNote = (req,res) => {  //发布hobby的处理函数
	const { news_id, title, content, img_list,news_type_id } = req.body
	const {id,user_pic,nickname} = req.user
	const sql = `insert into campus_community.news(title,content,user_id,img_list,news_type_id) values('${title}','${content}',${id},'${img_list}','${news_type_id}')`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.affectedRows !== 1) return res.send({status:1,message:'发布失败！'})
		res.send({status:0,message:'发布成功',data:result})
	})
}