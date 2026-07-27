const jwt = require('jsonwebtoken');
const userCtrl = {};
const userModel = require('../models/user');

userCtrl.login = async (req, res) => {
    console.log(req.body);
    const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
    console.log(user);
    if (!user) {
        return res.json(false);
    }
    // Convert to plain object so we can safely remove the password before sending to FE
    const userObj = user.toObject();
    delete userObj.password;
    let payload = { subject: user._id };
    let token = jwt.sign(payload, 'secretKey');
    return res.json({ user: userObj, token });
};

module.exports = userCtrl;