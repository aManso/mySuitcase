const mongoose = require('mongoose');
const { Schema } = mongoose;

const subscriberSchema = new Schema({
    endpoint: {type: String, required: true},
    expirationTime: {type: String, required: false},
    keys: {
        auth: {type: String},
        p256dh: {type: String},
    },
});

module.exports = mongoose.model('Subscriber', subscriberSchema);