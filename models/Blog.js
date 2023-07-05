const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  tittle: {type: String},
  author: {type: String},
  contentImageUrl: {type: String},
  imageSrc:{type: String},
  firstParagraph:  {type: String},
  secondParagraph: {type: String},
  thirdParagraph: {type: String},
  fourthParagraph: {type: String},
  fiveParagraph: {type: String},
  sixParagraph: {type: String},
  sevenParagraph: {type: String},
  eigthParagraph: {type: String},
  nineParagraph: {type: String},
  other: {type: String},
  date: {
    type: String,
    default: Date.now
  },
  catergory: {type: String}
});

module.exports = mongoose.model('Blog', blogSchema);
