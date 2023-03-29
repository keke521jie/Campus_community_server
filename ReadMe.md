<!-- user -->
## 前台接口文档   
### user
1. 注册接口
/api/user/register
方式：post
参数：body {username  password}
2. 登录接口
/api/user/login
方式：post
参数：body {username  password}
### userinfo
1. 获取当前用户信息接口
/my/userinfo
方式：get
2. 修改用户信息接口
/my/updateuserinfo
方式：post
参数：body{id nickname email}
3. 修改密码接口
/my/updatepwd
方式：post
参数：body{id oldPwd newPwd}
4. 获取用户信息接口
/api/getuserinfo/:id
方式：get
参数：id
### upload
1. 头像上传接口
/my/upload/userpic
方式:post
 
2. 上传hobby图片接口
/my/upload/hobbyimg
方式：post

3. 上传goods图片接口
/my/upload/goodsimg
方式：post

### hobby
1. 获取hobby列表 
/api/gethobbylist
方式:get

2. 获取某个hobby的文章列表接口
/api/gethobbynote
方式:post
参数：body{hobby_id,page,total}  爱好id 查询的页 每一页的数量

3. 获取某条文章信息的接口
/api/getarticleinfo/:id
方式：get
参数： 文章的id

4. 发布文章信息接口
/my/addhobbynote 
方式:post
参数： body { hobby_id, title, content, img_list }

### goods
1. 获取goodsType列表 
/api/getgoodstypelist
方式:get

2. 获取某个goodsType的文章列表接口
/api/getgoodslist
方式:post
参数：body{id,page,total}  goodsTypeId 查询的页 每一页的数量

3. 获取某goods信息的接口
/api/getgoodsinfo/:id
方式：get
参数： goods的id

4. 发布goods信息接口
/my/publishgoods
方式：POST
参数：body{ goods_type_id, name, describe, goods_img, user_vx, user_phone, price }











## 后台接口文档   
