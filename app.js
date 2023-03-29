const express = require('express');
const cors = require('cors')
const app = express()

app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // 设置允许来自哪里的跨域请求访问（值为*代表允许任何跨域请求，但是没有安全保证）req.headers.origin
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS"); // 设置允许接收的请求类型
    res.header("Access-Control-Allow-Headers", "Content-Type,request-origin"); // 设置请求头中允许携带的参数
    res.header("Access-Control-Allow-Credentials", "true"); // 允许客户端携带证书式访问。保持跨域请求中的Cookie。注意：此处设true时，Access-Control-Allow-Origin的值不能为 '*'
    res.header("Access-control-max-age", 1000); // 设置请求通过预检后多少时间内不再检验，减少预请求发送次数
    next();
})

app.use((req, res, next) => {   //封装处理错误的中间件
    res.cc = (err, status = 1) => {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 配置解析token的中间件
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))


// 引入user路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//引入发布news路由模块
const publish_news = require('./router/publish_news')
app.use('/my',publish_news)

// 引入发布hobby路由模块
const publish_hobby = require('./router/publish_hobby')
app.use('/my',publish_hobby)

// 引入goods路由模块
const goodsRouter = require('./router/goods')
app.use('/api',goodsRouter)

// 引入publish_goods路由模块
const publishGoodsRouter = require('./router/publis_goods')
app.use('/my',publishGoodsRouter)

// 引入hobby路由模块
const hobbyRouter = require('./router/hobby')
app.use('/api',hobbyRouter)

// 引入userinfo路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

// 引入upload路由模块
const uploadRouter = require('./router/upload')
app.use('/my',uploadRouter)

// 引入news路由模块
const newsRouter = require('./router/news')
app.use('/api',newsRouter)

// 定义错误级别中间件
app.use((err,req,res,next)=>{
    // 身份认证失败的错误处理
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    res.cc(err)
})


app.listen('8000', () => {
    console.log("服务已经开启8000端口监听中~~~");
})