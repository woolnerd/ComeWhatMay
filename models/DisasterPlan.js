const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ActionStepSchema = require('./ActionStep')

const DisasterPlanSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    targetTime: {
      type: Number,
      required: true, 
      min: [5, "Has to take longer than 5 minutes"],
      max: [60, "Has to take less than 60 minutes"]
    },
    disasterType: {
      type: String,
      required: true
    },
    profileId: {
        type: Schema.Types.Object,
        required: true
    },
    actions: [ActionStepSchema]

})

module.exports = DisasterPlan = mongoose.model('disasterPlans', DisasterPlanSchema);