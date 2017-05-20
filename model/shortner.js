var mongoose = require('mongoose');
var counter = require('./counter');
var base58 = require('../encoding');

var urlSchema = mongoose.Schema({
  _id: {type: Number, index: true},
  originalUrl: String,
  shortenedUrl: String,
  created_at: Date
});

urlSchema.pre('save', function(next){
  var newUrl = this;
  counter.findByIdAndUpdate({_id: 'url_counter'}, {$inc: {seq: 1} }, function(error, counter) {
    console.log(counter);
      if (error)
          return next(error);
      // set the id with counters sequence
      newUrl._id = counter.seq;
      newUrl.shortenedUrl = base58.encode(counter.seq);
      newUrl.created_at = new Date();
      next();
  });
});

var URL = mongoose.model('Url', urlSchema);

module.exports = URL;
