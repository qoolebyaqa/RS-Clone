const mongoose = require('mongoose');
const { take } = require('rxjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  "login": String,
  "password": String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
