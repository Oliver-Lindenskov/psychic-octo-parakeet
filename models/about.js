var mongoose = require('mongoose');

// Create the MessageSchema.
var MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('messages' , MessageSchema);
