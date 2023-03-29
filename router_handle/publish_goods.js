const db = require('../db')

exports.publishGoods = (req,res) => {
	const { goods_type_id, name, describe, goods_img, user_vx, user_phone, price } = req.body
	const {id} = req.user
	const sql = `insert into campus_community.goods(name,goods_describe,goods_img,user_id,user_vx,user_phone,user_pic,user_nickname,goods_type_id,price) values ('${name}','${describe}','${goods_img}',${id},'${user_vx}','${user_phone}',(SELECT user_pic FROM campus_community.user where id =${id}),(SELECT nickname FROM campus_community.user where id =${id}),${goods_type_id},${price});`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.affectedRows !== 1) return res.send({status:1,message:'发布失败！'})
		res.send({status:0,message:'发布成功',data:result})
	})
}