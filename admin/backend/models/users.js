const { Users } = require('../utils/db');

const signup = ({ username, password }) => {
    const users = new Users({
        username,
        password
    })
    return users.save()
}

module.exports = {
    signup
}