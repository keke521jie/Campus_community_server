const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))

const routerHandle = require('../router_handle/news')

//查询news分类列表
router.get('/getnewslist',routerHandle.getNewslist)

// 查询某个分类的帖子列表
router.post('/getnews',routerHandle.getNews)


module.exports = router