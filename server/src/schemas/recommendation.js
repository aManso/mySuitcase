const mongoose = require('mongoose');
const { Schema } = mongoose;

const beachRecommendationsSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    prio: {type: Number, required: true},
    male: {type: Boolean, required: false},
});

module.exports = beachRecommendationsSchema;