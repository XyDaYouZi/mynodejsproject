//bcrypt 安装不成功先npm install --global --production windows-build-tools
const bcrypt = require('bcrypt');

const passwordHash = (myPlaintextPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
            // Store hash in your password DB.
            if (err) {
                reject(err);
            } else {
                resolve(hash);
            }
        });
    })
}

module.exports = {
    passwordHash
}