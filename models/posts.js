var mongoose = require('mongoose');

// Create the MovieSchema.
var PostsSchema = new mongoose.Schema({
  picture: {type: String , required: true},
  userid: {type: String, required: true},
  age: {type: String , required: false},
  size: {type : String , required : true},
  colour: {type : String , required : true},
  kind: {type : String , required : true},
  state: {type : String , required : true},
  inret: {type : String , required : true},
  male: {type : Boolean , required : true},
  about: {type : String , required : true},
  latitude: {type : Number , required : true},
  longitude: {type : Number , required : true},
  likes: {type: Array, required : true}
});

module.exports = mongoose.model('posts',PostsSchema);
