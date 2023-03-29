const express = require('express')
const router = express.Router()
const path = require('path') //cv
const user_handle = require('../router_handle/upload')   //导入user路由处理函数
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
const multer = require('multer')
//设置临时目录 存放上传的图片
const upload = multer({
	dest: "tmp/"
})
// 上传头像接口
router.post('/upload/userpic',upload.single('user_pic'), user_handle.uploadUser_pic)

// 上传hobby文章图片接口
router.post('/upload/hobbyimg',upload.single('hobby_pic'), user_handle.uploadHobbyImg)

//上传goods图片接口
router.post('/upload/goodsimg',upload.single('goods_pic'), user_handle.uploadGoodsImg)

//上传news图片接口
router.post('/upload/newsimg',upload.single('news_pic'), user_handle.uploadNewsImg)

module.exports = router