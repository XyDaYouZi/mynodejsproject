//注册用户
const signup = (req, res, next) => {
    const { username, password } = req.body;
    res.render('success', {
        data: JSON.stringify([{ username, password }])
    });
}

module.exports = {
    signup
}