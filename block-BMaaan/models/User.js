let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let userSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: String,
  address: String,
  reputation: { type: Number, default: 0 },
  questions: [{ type: mongoose.types.ObjectId, ref: 'Question' }],
  answers: [{ type: mongoose.types.ObjectId, ref: 'Answer' }],
});

userSchema.index({ questions: 1 });

let User = mongoose.model('User', userSchema);

module.exports = User;
