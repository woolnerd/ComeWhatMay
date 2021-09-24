const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActionStepSchema = new Schema({
    owner: {
      type: String,
      required: true
    },
    task: {
      type: String,
      required: true
    }
})

module.exports = ActionStepSchema
