const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {type: String, required: true},
    priority: {type: Number, required: false},
});

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
            currentPriority: {type: Number, required: false},
            items: {type: [ItemSchema], required: false}
        },
        common: {
            selected: {type: String, required: false},
            currentPriority: {type: Number, required: false},
            items: {type: [ItemSchema], required: false}
        },
        cultural: {
            selected: {type: String, required: false},
            currentPriority: {type: Number, required: false},
            items: {type: [ItemSchema], required: false}
        },
        mountain: {
            selected: {type: String, required: false},
            currentPriority: {type: Number, required: false},
            items: {type: [ItemSchema], required: false}
        },
        sport: {
            selected: {type: String, required: false},
            currentPriority: {type: Number, required: false},
            items: {type: [ItemSchema], required: false}
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