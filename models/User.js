let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  uName: String,
  highScore: Number
});

module.exports = mongoose.model('User', UserSchema);
