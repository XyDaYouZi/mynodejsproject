var express = require('express');
var router = express.Router();
const { signup, list, removeUser } = require('../controllers/users');

router.post('/', signup);
router.get('/', list);
router.delete('/', removeUser);
module.exports = router;
