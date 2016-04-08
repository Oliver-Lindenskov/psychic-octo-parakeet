var mongoose = require('mongoose');

// Create the MovieSchema.
var PostsSchema = new mongoose.Schema({
  user_id: {type: String , required: true},
  type: {type: String , required: true},
  picture: {type: String , required: true},
  about: {type: String , required: true},
  upload: {type: String , required: true},
  hosted: {type: String , required: true},
  address: {type: String , required: true},
  genre: {type: String , required: true},
  dish: {type: String , required: true},
  guests: {
    forEat: {type: Number , required: true},
    forDine: {type: String , required: true}
  },
  tags: {type: Array , required: true},
  bringAlong: {type: Array , required: true},
  total: {type: Number , required: true},
  filled: {
  	guests: {
  		forEat: {type: Number , required: true},
  		forDine: {type: Number , required: true}
  	},	
	bringAlong: {type: String , required: true}
  }
});

module.exports = mongoose.model('posts',PostsSchema);
