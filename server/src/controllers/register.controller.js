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
        return res.json(response);
    }
};

userCtrl.setUpUserToBeRegistered = function(user) {
    delete user.passwordConfirmation;
    user.joiningDate = new Date();
    user.admin = false;
    return user;
};

module.exports = userCtrl;