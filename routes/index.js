//FileName: "index.js"
//Name: "Ashley Turnbull"
//Student ID: 301190323
//Date: 2021-10-03

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'Home' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', 
  { title: 'About' });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', 
  { title: 'Products' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', 
  { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', 
  { title: 'Contact Us' });
});
module.exports = router;
