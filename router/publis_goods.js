const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:false}))
const router_handle = require('../router_handle/publish_goods')

router.post('/publishgoods',router_handle.publishGoods)

module.exports = router