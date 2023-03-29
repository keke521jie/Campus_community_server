const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
const router_handle = require('../router_handle/goods')

//获取商品类型列表接口
router.get('/getgoodstypelist',router_handle.getGoodsTypeList)

//获取某个分类的所有商品列表
router.post('/getgoodslist',router_handle.getGoodsList)

// 查看商品信息接口
router.get('/getgoodsinfo/:id',router_handle.getGoodsInfo)

module.exports = router