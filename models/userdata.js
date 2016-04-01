var mongoose = require('mongoose');

// Create the dataSchema.
var UserdataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    favDishes: {
        type: Array,
        required: true
    },
    bestDishes: {
        type: Array,
        required: true
    },
    score: {
        hunger: {
            type: Number,
            required: true
        },
        cooking: {
            type: Number,
            required: true
        },
        reliability: {
            type: Number,
            required: true
        },
        followers: {
            type: Number,
            required: true
        },
        reviews: {
            type: Array,
            required: true
        },
        educated: {
            type: Boolean,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    following: {
        type: Array,
        required: true
    }

});

module.exports = mongoose.model('userdatas',UserdataSchema);

