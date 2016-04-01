var mongoose = require('mongoose');

// Create the dataSchema.
var UserdataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('userdatas',UserdataSchema);
