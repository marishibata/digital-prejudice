const mongoose = require('./texts.db')
const { Schema } = mongoose;

const textsSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  audio: {
    type: String,
  },
})

const Text = mongoose.model('Text', textsSchema);

module.exports = Text;