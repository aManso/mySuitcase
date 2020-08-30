const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number},
    admin: {type: Boolean},
    joiningDate: {type: Date},
    address: {
        country: {type: String},
        city: {type: String},
        street: {type: String},
        number: {type: String},
        postCode: {type: String},
        coordinates: {type: String},
    },
});

module.exports = mongoose.model('User', UserSchema);