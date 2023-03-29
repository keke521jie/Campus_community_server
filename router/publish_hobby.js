const express = require('express')
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
const routerHandle = require('../router_handle/publish_hobby')


//向某个爱好插入帖子
router.post('/addhobbynote',routerHandle.addHobbyNote)


module.exports = router