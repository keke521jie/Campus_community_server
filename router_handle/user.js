const db = require("../db")
// 引入加密
const bcrypt = require('bcryptjs')
// 引入生成token的工具包
const jwt = require('jsonwebtoken')
// 引入全局配置文件
const config = require('../config')

// 注册新用户的处理函数
exports.regUser = (req, res) => {
    const { username, password } = req.body
    if (!username || !password) return res.send({ status: 1, message: '用户名或密码不合法！' })
    if (username.length < 8) return res.send({ status: 1, message: '用户名需要大于8!' })
    const sql = `select * from user where username = '${username}'`
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        if (result.length > 0) return res.cc('用户名已被占用！')
        const newPassword = bcrypt.hashSync(password, 10)  // 加密密码 
        const sql2 = `INSERT INTO user(username,password,user_pic) VALUES('${username}','${newPassword}','http://152.136.253.106:2000/images/default-userpic.png')`
        db.query(sql2, (err2, result2) => {
            if (err2) return res.cc(err)
            if (result2.affectedRows == 1) return res.send({ status: 0, message: "注册成功！" })
        })
    })
}

// 登录接口处理函数
exports.login = (req, res) => {
    const { username, password } = req.body
    const sql = `select * from user where username = '${username}'`
    db.query(sql, (err, result) => {
        if (err) return res.cc(err)
        if (result.length !== 1) return res.cc('用户名不存在！')
        const compareResult = bcrypt.compareSync(password, result[0].password)   //解密密码于原密码比较
        if (!compareResult) return res.cc('用户名或密码错误！')
        const user = { ...result[0], password: '' }
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: '10h' })
        res.send({ status: 0, message: '登录成功', token: 'Bearer '+tokenStr })
    })
}

// 获取用户信息接口的处理函数
exports.getUserInfo = (req,res) => {
	const { id } = req.params
	const sql = `select username,email,nickname,user_pic from user where id =${id}`
	db.query(sql,(err,result)=>{
		if(err)　return res.cc(err)
		if(result.length !== 1) return res.cc('查询失败！')
		res.send({status:0,message:'查询成功！',data:result})
	})
}