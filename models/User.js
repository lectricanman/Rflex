let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  uName: String,
  highScore: Number
});
