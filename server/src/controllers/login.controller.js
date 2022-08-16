const jwt = require('jsonwebtoken');
const userCtrl = {};
const userModel = require('../models/user');

userCtrl.login = async (req, res) => {
    // res.send('Hello world');
    console.log(req.body);
    const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
    console.log(user);

    if(user) {
        // we remove the password that is not needed in FE
        delete user.password;
        // we create the jwt
        let payload = {subject: user._id};
        let token = jwt.sign(payload, 'secretKey', {expiresIn: '1h'});
        return res.json({user, token});
    }
    // If not user is found, we return undefined
    return res.json();
};

module.exports = userCtrl;