const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
const user_handle = require('../router_handle/user')   //导入user路由处理函数

//用户注册接口
router.post('/user/register',user_handle.regUser)

// 用户登录接口
router.post('/user/login',user_handle.login)

//获取用户信息接口
router.get('/getuserinfo/:id',user_handle.getUserInfo)

module.exports = router