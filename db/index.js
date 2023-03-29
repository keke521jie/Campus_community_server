const mysql = require('mysql');
// 2 创建链接配置
const db = mysql.createPool({
    host:'localhost',   // 主机名 （服务器地址）
    user:'root',    //用户名
    password:'admin123',    // 密码
    database:'campus_community',  // 写上自己要连接的数据库名字
})
// 3 建立链接
module.exports = db