const {
    Users
} = require('../utils/db');

const signup = ({
    username,
    password
}) => {
    const users = new Users({
        username,
        password
    })
    return users.save()
}

const findUser = (username) => {
    return Users.findOne({
        username
    })
}

module.exports = {
    signup,
    findUser
}