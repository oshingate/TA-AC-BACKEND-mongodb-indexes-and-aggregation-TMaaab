let mongoose = require('mongoose');

let Schema = mongoose.Schema;
let questionSchema = new Schema({
  title: { type: String, require: true },
  likes: { type: Number, default: 0 },
  tags: [{ type: String }],
  viewsByDays: [{ type: Number, default: 0 }],
  answers: [{ type: mongoose.types.ObjectId, ref: 'Answers' }],
  createdBy: { type: mongoose.types.ObjectId, ref: 'User' },
});

questionSchema.index({ tags: 1 });

let Question = mongoose.model('Question', questionSchema);

module.exports = Question;
