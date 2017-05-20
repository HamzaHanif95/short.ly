var express = require('express');
var router = express.Router();
var UrlShortner = require('../model/shortner');

/* GET shortner listing. */
router.post('/', function(req, res, next) {
  UrlShortner.findOne({
    originalUrl: req.body.url
  }).then(function(urlData){
    console.log("urlData")
    console.log(urlData)
    if(urlData) {
      console.log('sending dataaback')
      res.send(urlData);
    }
    else{
      console.log('shotnring')

      var url = new UrlShortner({
        originalUrl: req.body.url
      });

      url.save(function (err, savedUrl) {
        if (err){
          console.log(err);
        } else {
          res.send(savedUrl);
        }
      });
    }
  });
});

module.exports = router;
