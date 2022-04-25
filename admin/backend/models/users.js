const {
    Users
} = require('../utils/db');

//后端数据交互
const signup = ({
    username,
    password,
    group
}) => {
    const users = new Users({
        username,
        password,
        group
    })
    return users.save();
}

const findUser = (username) => {
    return Users.findOne({
        username
    })
}

const findList = () => {
    return Users.find().sort({ _id: -1 });
}

const remove = (_id) => {
    return Users.findByIdAndRemove({ _id })
}
module.exports = {
    signup,
    findUser,
    findList,
    remove
}