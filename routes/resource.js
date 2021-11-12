var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var language_controller = require('../controllers/language');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/languages', language_controller.language_create_post);
// DELETE request to delete Costume.
router.delete('/resource/languages/:id', language_controller.language_delete);
// PUT request to update Costume.
router.put('/resource/languages/:id',
language_controller.language_update_put);
// GET request for one Costume.
router.get('/resource/languages/:id', language_controller.language_detail);
// GET request for list of all Costume items.
router.get('/resource/languages', language_controller.language_list);
module.exports = router;