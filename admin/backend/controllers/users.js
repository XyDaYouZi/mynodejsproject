//载入数据库连接
const usersModel = require('../models/users');

//注册用户
const signup = (req, res, next) => {
    const {
        username,
        password
    } = req.body;
    let result = usersModel.findUser(username);
    console.log(result);
    // usersModel.signup({
    //     username,
    //     password
    // }).then(data => {
    //     res.render('success', {
    //         data: JSON.stringify([data])
    //     });
    // }).catch(err => {
    //     console.log(err);
    // });
}

module.exports = {
    signup
}