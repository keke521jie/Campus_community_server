const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
const userinfo_handle = require('../router_handle/userinfo')   //导入user路由处理函数

//获取用户信息接口
router.get('/userinfo',userinfo_handle.getUserinfo)

// // 更新用户信息接口
router.post('/updateuserinfo',userinfo_handle.updataUserinfo)

// // 更新用户密码
router.post('/updatepwd',userinfo_handle.updatePwd)

module.exports = router