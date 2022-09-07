const mongoose = require('mongoose');
const { Schema } = mongoose;

const actionSchema = new Schema({
    action: {type: String},
    title: {type: String},
})

const newsletterSchema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    icon: {type: String, required: true},
    vibrate: {type: [Number]},
    data: {
        primaryKey: {type: Number},
        dateOfArrival: {type: Date},
    },
    actions: [actionSchema],
});

module.exports = mongoose.model('Newsletter', newsletterSchema);