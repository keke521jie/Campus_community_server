const db = require('../db')


// 获取商品类型列表接口的处理函数
exports.getGoodsTypeList = (req,res) =>　{
	const sql = 'SELECT * FROM campus_community.goods_type;'
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		res.send({status:0,message:'查询成功！',data:result})
	})
}

//获取某个分类的所有商品列表接口的处理函数
exports.getGoodsList = (req,res) => {
	const { id, page, total } = req.body
	const sql = `SELECT * FROM campus_community.goods where goods_type_id='${id}' order by date desc limit ${(page-1)*10},${((page-1)*10)+total}`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		res.send({status:0,message:'查询成功',data:result})
	})
}

// 查看商品信息接口处理函数
exports.getGoodsInfo = (req,res) => {
	const { id } = req.params
	const sql = `select * from campus_community.goods,campus_community.user where campus_community.goods.id=${id} && campus_community.goods.user_id=campus_community.user.id`
	db.query(sql,(err,result)=>{
		if(err) return res.cc(err)
		if(result.length !== 1) return res.cc('查询失败，没有该条数据！')
		res.send({status:0,message:'查询成功！',data:result})
	})
}