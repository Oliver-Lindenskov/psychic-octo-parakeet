var restful = require('node-restful');

module.exports = function( app , route ) {
   var rest = restful.model(
       'posts',
       app.models.posts
   ).methods(['get','post','put','delete']);

   //register this API
   rest.register(app,route);

   return function( req , res , next ) {
       next();
   };
};
