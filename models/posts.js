var mongoose = require('mongoose');

// Create the MovieSchema.
var PostsSchema = new mongoose.Schema({
  user_id: {type: String , required: false},
  type: {type: String , required: false},
  picture: {type: String , required: false},
  about: {type: String , required: false},
  upload: {type: String , required: false},
  hosted: {type: String , required: false},
  address: {type: String , required: false},
  genre: {type: String , required: false},
  dish: {type: String , required: false},
  guests: {
    forEat: {type: Number , required: false},
    forDine: {type: String , required: false}
  },
  tags: {type: Array , required: false},
  bringAlong: {type: Array , required: false},
  total: {type: Number , required: false},
  filled: {
  	guests: {
  		forEat: {type: Number , required: false},
  		forDine: {type: Number , required: false}
  	},	
	  bringAlong: {type: String , required: false}
  }
});

module.exports = mongoose.model('posts',PostsSchema);
