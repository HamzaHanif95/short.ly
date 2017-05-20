var express = require('express');
var base58 = require('../encoding');
var router = express.Router();
var Url = require('../model/shortner');

/* GET home page. */
router.get('/:shortUrl', function(req, res, next) {
  // decode shorturl to get ID
  var id = base58.decode(req.params.shortUrl);
  console.log('id::::', id)
  // find url by id 
  Url.findOne({_id: id}).then(function(url) {
    console.log(url);
    if(url) {
      return res.redirect(url.originalUrl);
    }
    res.send({ error: 'short url does not exist' });
  })
  // redirect to orginal url
});

module.exports = router;
