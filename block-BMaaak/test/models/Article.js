let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articleSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
});

articleSchema.index({ tags: 1 });
articleSchema.index({ $text: { title: 1 } });

let Article = mongoose.model('Article', articleSchema);

module.exports = Article;
