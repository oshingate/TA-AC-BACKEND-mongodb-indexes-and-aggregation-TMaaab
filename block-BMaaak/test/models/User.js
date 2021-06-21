let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  address: {
    city: String,
    state: String,
    country: { type: String, unique: true },
    pin: String,
  },
});

userSchema.index({ 'address.state': 1, 'address.country': 1 });

let User = mongoose.model('User', userSchema);

module.exports = User;
