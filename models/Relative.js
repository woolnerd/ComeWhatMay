const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RelativeSchema = new Schema({
    profile: {
      type: Schema.Types.ObjectId,
      ref: 'profiles', 
      require: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }, 
    relationship: {
        type: String,
        required: false
    }, 
    phoneNumber: {
        type: Number,
        required: false
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

const Relative = mongoose.model('relative', RelativeSchema);
module.exports = Relative;