const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      default: ['user']
    },
    isActive: {
      type: Boolean,
      default: true
    }
  }, { timestamps: true });
  
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;