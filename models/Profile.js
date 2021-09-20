const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      unique: true
    },
    householdSize: {
      type: Number,
      required: false
    },
    householdName: {
        type: String, 
        required: false
    },
    phoneNumber: {
        type: Number, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })

module.exports = Profile = mongoose.model('profiles', ProfileSchema);