var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
{
	genre: { type: string, required: true, min:3, max:100 }, //reference to the associated genre
 }
);

// Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);