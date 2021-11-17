var express = require('express');
const language_controlers= require('../controllers/language');
var router = express.Router();
/* GET languages */
router.get('/', language_controlers.language_view_all_Page );

// GET request for one language. 
router.get('/language/:id', language_controlers.language_detail); 

/* GET detail language page */ 
router.get('/detail', language_controlers.language_view_one_Page);

/* GET create language page */ 
router.get('/create', language_controlers.language_create_Page); 
 
module.exports = router;