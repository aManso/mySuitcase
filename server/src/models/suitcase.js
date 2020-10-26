const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuitcaseSchema = new Schema({
    name: {type: String, required: true},
    date: {
        from: {type: Date, required: false},
        to: {type: Date, required: false},
    },
    place: {
        city: {type: String, required: false},
        country: {type: String, required: false},
        street: {type: String, required: false},
        coordinates: {
            lng: {type: Number, required: false},
            lat: {type: Number, required: false},
        },
    },
    type: {
        beach: {
            selected: {type: String, required: false},
            priority: {type: Number, required: false},
        },
        common: {
            selected: {type: String, required: false},
            priority: {type: Number, required: false},
        },
        cultural: {
            selected: {type: String, required: false},
            priority: {type: Number, required: false},
        },
        mountain: {
            selected: {type: String, required: false},
            priority: {type: Number, required: false},
        },
        sport: {
            selected: {type: String, required: false},
            priority: {type: Number, required: false},
        },
    },
    isInProgress: {type: Boolean, required: false},
    metadata: {
        creationDate: {type: Date, required: true},
    },
});


module.exports = function(collectionName){
    return mongoose.model('Suitcase', SuitcaseSchema, collectionName + '-suitcase');
};