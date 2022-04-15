var express = require('express');
var router = express.Router();
var utils = require('../modules/utils')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-Frame-Options', 'DENY')
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'")
  res.redirect("/math/add");
});


/* GET home page. */
router.get('/add', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 && num2) {
      result = utils.add(parseFloat(num1), parseFloat(num2))
  }
  res.set('X-Frame-Options', 'DENY')
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'")
  res.render('compute', { title: 'add' ,result:result, num1, num2, symbol:"+" });

});

router.get('/divide', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 && num2) {
    try {
      result = utils.subtract(parseFloat(num1), parseFloat(num2))
    } catch (e) {
      result = "error"
    }

  }
  res.set('X-Frame-Options', 'DENY')
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'")
  res.render('compute', { title: 'divide' ,result:result, num1, num2, symbol:"/" });

});

router.get('/multiply', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 && num2) {
      result = utils.multiply(parseFloat(num1), parseFloat(num2))
  }
  res.set('X-Frame-Options', 'DENY')
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'")
  res.render('compute', { title: 'multiply' ,result:result, num1, num2, symbol:"*" });

});


router.get('/subtract', function(req, res, next) {
  var result = 0
  var {num1, num2} = req.query
  if(num1 && num2) {
      result = utils.divide(parseFloat(num1), parseFloat(num2))
  }
  console.log(result)
  console.log(num1)
  console.log(num2)
  res.set('X-Frame-Options', 'DENY')
  res.set('X-Content-Type-Options', 'nosniff')
  res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'")
  res.render('compute', { title: 'subtract' ,result:result, num1, num2, symbol:"-" });

});


module.exports = router;
