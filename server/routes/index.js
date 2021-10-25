//FileName: "index.js"
//Name: "Ashley Turnbull"
//Student ID: 301190323
//Date: 2021-10-03

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST Post for processing the Login Page*/
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage);

/* POST Post for processing the Register Page*/
router.post('/register', indexController.processRegisterPage);

/* GET to perform logout */
router.get('/logout', indexController.performLogout);

module.exports = router;
