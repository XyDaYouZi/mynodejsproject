// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin1888@localhost:27017/cat-admin?authSource=admin&retryWrites=true&w=majority');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = mongoose.Schema({
    username: String,
    password: String
});

var Users = mongoose.model('users', userSchema);
//构建Users的model
module.exports = {
    Users
}

// var felyne = new Users({ name: 'Felyne' });

// felyne.save(function (err, felyne) {
//     if (err) return console.error(err);
//     console.log('hello,数据存储成功');
//     felyne.name
// });