const jwt = require('jsonwebtoken');
const userCtrl = {};
const userModel = require('../models/user');

userCtrl.register = async (req, res) => {
    console.log('user required to be registered', req.body);
    const user = await userModel.findOne({ email: req.body.email });
    if (user) {
        console.log('There is already an user with this email', req.body.email);
        return res.json(false);
    } else {
        let user = userCtrl.setUpUserToBeRegistered(req.body);
        user = new userModel(user);
        console.log('user modeled to be registered', user);
        const response = await user.save();
        console.log('User registered');
        // we remove the password that is not needed in FE
        delete response.password;
        // we create the jwt
        let payload = {subject: user. _id};
        let token = jwt.sign(payload, 'secretKey');
        return res.json({response, token});
    }
};

userCtrl.setUpUserToBeRegistered = function(user) {
    delete user.passwordConfirmation;
    user.joiningDate = new Date();
    user.admin = false;
    return user;
};

module.exports = userCtrl;