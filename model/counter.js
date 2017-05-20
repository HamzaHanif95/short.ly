var mongoose = require('mongoose');

var Counter = mongoose.model('Counter', {
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});


Counter.find({seq: {$exists: true}}, function(err, cnt){
  if (cnt.length === 0) {
    var newCounter = new Counter({
      _id: 'url_counter',
      seq: 0
    });
    newCounter.save(newCounter)
    .then(function(res){
      console.log(res);
    });
  }
})

module.exports = Counter;
