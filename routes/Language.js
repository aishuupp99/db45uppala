var express = require('express');
const language_controlers= require('../controllers/language');
var router = express.Router();
/* GET costumes */
router.get('/', language_controlers.language_view_all_Page );
module.exports = router;
