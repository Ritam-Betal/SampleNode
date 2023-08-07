const User = require('../Model/User');
var mongoose = require('mongoose');

const get_user = (req, res) => {
    res.send('ok');
}


module.exports = {
    get_user
}