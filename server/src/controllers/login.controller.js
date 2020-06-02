const jwt = require('jsonwebtoken');
const userCtrl = {};
const userModel = require('../models/user');

userCtrl.login = async (req, res) => {
    // res.send('Hello world');
    console.log(req.body);
    const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
    console.log(user);
    // we remove the password that is not needed in FE
    delete user.password;
    // we create the jwt
    let payload = {subject: user. _id};
    let token = jwt.sign(payload, 'secretKey');
    return user ? res.json({user, token}) : res.json(false);
};

module.exports = userCtrl;