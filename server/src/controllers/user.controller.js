const userCtrl = {};
const userModel = require('../models/user');

userCtrl.getUsers = async (req, res) => {
    // res.send('Hello world');
    const users = await userModel.find({ });
    console.log(users);
    res.json(users);
};

userCtrl.getUser = async (req, res) => {
    // res.send('Hello world');
    console.log(req.params.id);
    const users = await userModel.findById(req.params.id);
    console.log(users);
    res.json(users);
};

userCtrl.updateUser = async (req, res) => {
    // res.send('Hello world');
    const { id } = req.params;
    const userToUpdate = {
        name: req.body.name
    };
    const response = await userModel.findByIdAndUpdate(id, {$set: userToUpdate}, {new: true });
    res.json(response);
};

userCtrl.addUser = async (req, res) => {
    // res.send('Hello world');
    const user = new userModel(req.body);
    const response = await user.save();
    res.json(response);
};

userCtrl.deleteUser = async (req, res) => {
    // res.send('Hello world');
    const response = await userModel.findByIdAndRemove(req.params.id);
    res.json(response);
};

module.exports = userCtrl;