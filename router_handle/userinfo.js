const db = require('../db')
// 引入加密
const bcrypt = require('bcryptjs')


exports.getUserinfo = (req, res) => {
    const sql = 'select id,username,nickname,email,user_pic from user where id=?'
    db.query(sql, req.user.id,(err, result) => {
        if (err) return res.cc(err)
        if (result.length !== 1) return res.cc('查询用户信息失败！')
        res.send({ status: 0, message: '查询用户信息成功！', data: result[0] })
    })
}

// 修改用户信息接口的处理函数
exports.updataUserinfo = (req,res) => {
    const sql = 'update user set ? where id=?'
    db.query(sql,[req.body,req.body.id],(err,result)=>{
        if(err) return res.cc(err)
        if(result.affectedRows !== 1) return res.cc('更新用户信息失败！')
        res.send({status:0,message:'更新用户信息成功！'})
    })
} 


// 修改用户密码接口的处理函数
exports.updatePwd = (req,res) => {
    const sql = 'select * from user where id=?'
    db.query(sql,req.user.id,(err,result)=>{
        if(err) return res.cc(err)
        if(result.length !== 1) res.cc('未查询到该用户名！')
        const compareResult = bcrypt.compareSync(req.body.oldPwd, result[0].password)   //解密密码于原密码比较
        if(!compareResult) return res.cc('原密码错误！')
        const newPassword = bcrypt.hashSync(req.body.newPwd, 10)  // 加密密码 
        const sql = 'update user set password=? where id=?'
        db.query(sql,[newPassword,req.user.id],(err,result)=>{
            if(err) res.cc(err)
            if(result.affectedRows !== 1) res.cc('密码修改失败！')
            res.send({status:0,message:'密码修改成功！'})
        })
    })
}