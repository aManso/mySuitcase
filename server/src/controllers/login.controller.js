const userCtrl = {};
const userModel = require('../models/user');

userCtrl.login = async (req, res) => {
    // res.send('Hello world');
    console.log(req.body);
    const user = await userModel.findOne({ email: req.body.email, password: req.body.password });
    console.log(user);
    return user ? res.json(user) : res.json(false);
};

module.exports = userCtrl;