//载入数据库连接
const usersModel = require('../models/users');

//注册用户
const signup = async (req, res, next) => {
    const { username, password } = req.body;
    let result = await usersModel.signup({ username, password });
    console.log(result);
    
    // res.render('success', {
    //     data: JSON.stringify([{ username, password }])
    // });
}

module.exports = {
    signup
}