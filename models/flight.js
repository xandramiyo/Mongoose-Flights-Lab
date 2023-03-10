const mongoose = require('mongoose');
const Schema = mongoose.Schema

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['LAX', 'LAS', 'HNL', 'PDX', 'JFK'],
        required: true,
    },
    arrival: {
        type: Date,
        required: true,
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        default: 'LAX',
        enum: ['LAX', 'LAS', 'HNL', 'PDX', 'JFK'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            const oneYearFromNow = new Date()
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1)
            return oneYearFromNow
        },
    },
    destinations: [destinationSchema]
})

module.exports = mongoose.model("Flight", flightSchema)