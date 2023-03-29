const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))


const routerHandle = require('../router_handle/hobby')

//查询爱好分类列表接口
router.get('/gethobbylist',routerHandle.getHobbyList)

//查询某个爱好的帖子列表
router.post('/gethobbynote',routerHandle.getHobbyNote)

//查询文章信息
router.get('/getarticleinfo/:id',routerHandle.getArticleInfo)


module.exports = router