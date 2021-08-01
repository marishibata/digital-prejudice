const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/texts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose;