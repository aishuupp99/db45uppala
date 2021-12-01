var express = require('express');
const language_controlers= require('../controllers/language');
var router = express.Router();

/* GET languages */
router.get('/', language_controlers.language_view_all_Page );
module.exports = router;

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// GET request for one language. 
router.get('/language/:id', language_controlers.language_detail); 

/* GET detail language page */ 
router.get('/detail', language_controlers.language_view_one_Page);

/* GET create language page */ 
router.get('/create', secured,language_controlers.language_create_Page); 

/* GET update costume page */ 
router.get('/update', secured,language_controlers.language_update_Page); 

/* GET create language page */
router.get('/delete', secured,language_controlers.language_delete_Page);

 
module.exports = router;