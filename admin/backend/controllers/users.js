//载入数据库连接
const usersModel = require('../models/users');
const {
    passwordHash
} = require('../utils/tools');
//注册用户
const signup = async (req, res, next) => {
    const {
        username,
        password,
        group
    } = req.body;
    const bcryptPassword = await passwordHash(password);
    //密码加密
    // 查询用户是否存在
    let findResult = await usersModel.findUser(username);
    res.set('content-type', 'application/json;charset=utf-8');
    if (findResult) {
        res.render("fail", {
            msg: JSON.stringify("数据已存在")
        });
        //要传递的数据必须转为JSON.stringify(data)
    } else {
        //插入数据库
        usersModel.signup({
            username: username,
            password: bcryptPassword,
            group: group
        }).then((data) => {
            res.render('success', {
                data: JSON.stringify([data])
            });
        }).catch((err) => {
            throw err;
        });
    }
}

//用户列表获取
const list = async (req, res, next) => {
    //查询数据
    res.set('content-type', 'application/json;charset=utf-8');
    let userList = await usersModel.findList();
    res.render("success", {
        data: JSON.stringify(userList)
    })
}

//删除用户
const removeUser = async (req, res, next) => {
    let { id } = req.body;
    console.log(id);
    let result = await usersModel.remove(id);
    console.log(result);
    let data = [];
    if (result) {
        res.set('content-type', 'application/json;charset=utf-8');
        res.render('success', { data: JSON.stringify(data) })
    }
}

module.exports = {
    signup,
    list,
    removeUser
}