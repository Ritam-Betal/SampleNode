var express = require('express');
var router = express.Router();

const UserController = require('../../Controller/UserController');

// User Menu start
router.get('/get_user',UserController.get_user)
// User Menu end


module.exports = router;