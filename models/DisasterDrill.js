const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DisasterDrillSchema = new Schema ({
    timeToStart: {
        type: Date, 
        default: Date.now
    },
    disPlan: {
        type: Schema.Types.Object,
        ref: 'disasterPlans',
        required: true
    },
    reviewNote: {
        type: String, 
    },
    timeToComplete: {
        type: Number
    }
})

module.exports = DisasterDrill = mongoose.model('disasterDrills', DisasterDrillSchema);