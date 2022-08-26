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
    let user = await userModel.findById(req.params.id);

     // we remove the password that is not needed in FE
     user = JSON.parse(JSON.stringify(user));
     delete user.password;

    console.log(user);
    res.json(user);
};

userCtrl.updateUser = async (req, res) => {
    console.log('user required to be updated', req.body);
    const { id } = req.params;
    const currentUser = await userModel.findById(id);

    // If the main password is wrong, dont continue and return error
    if (currentUser.password != req.body.passwords.password) {
        // TODO replace for an handled error
        console.log('The password is not correct', req.body.passwords.password);
        return res.status(401).send("wrongPassword");
    }

    // If one of the changes is the email and it exists already in the DDBB, dont continue and return error
    if (currentUser.email != req.body.email) {
        // User wants to change the email, so we check there is not other existing
        console.log('user wants to update the email');
        const user = await userModel.findOne({ email: req.body.email });
        if (user) {
            // TODO replace for an handled error
            console.log('There is already an user with this email', req.body.email);
            return res.status(401).send("existingEmail");
        }
    }

    let userToUpdate = userCtrl.setUpUserToBeUpdated(currentUser, req.body);
    userToUpdate = new userModel(userToUpdate);
    console.log('user modeled to be updated', userToUpdate);
    let userUpdated = await userModel.findByIdAndUpdate(id, {$set: userToUpdate}, {new: true });
    console.log('User updated');
    // we remove the password that is not needed in FE
    userUpdated = JSON.parse(JSON.stringify(userUpdated));
    delete userUpdated.password;
    res.json(userUpdated);
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


userCtrl.setUpUserToBeUpdated = function(userInDDBB, userToUpdate) {
    userInDDBB.name = userToUpdate.name;
    userInDDBB.email = userToUpdate.email;
    userInDDBB.age = userToUpdate.age;
    userInDDBB.gender = userToUpdate.gender;
    userInDDBB.password = userToUpdate.passwords.newPassword ? userToUpdate.passwords.newPassword : userToUpdate.passwords.password;
    return userInDDBB;
};

module.exports = userCtrl;