const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.listen(3000,()=>{
	console.log('静态资源服务器已经启动~~3000');
})
app.use(express.static('public'))