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
        required: true
    },
    phoneNumber: {
        type: Number, 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  })


module.exports = Profile = mongoose.model('profiles', ProfileSchema);