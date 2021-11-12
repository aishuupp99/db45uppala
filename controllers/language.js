const language = require('../models/language');
var Language = require('../models/language');
// List of all Language
exports.language_list = async function(req, res) {
    try{
    theLanguage = await Language.find();
    res.send(theLanguage);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Language.
exports.language_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Language detail: ' + req.params.id);
};
// Handle Language create on POST.
exports.language_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Language();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Types":"Java", "NumberOfLang":2, "Data":"Primitive"}
    document.Types = req.body.Types;
    document.NumberOfLang = req.body.NumberOfLang;
    document.Data = req.body.Data;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   }
// Handle Language delete form on DELETE.
exports.language_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Language delete DELETE ' + req.params.id);
};
// Handle Language update form on PUT.
exports.language_update_put =  async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await language.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Types)  toUpdate.Types = req.body.Types; 
        if(req.body.NumberOfLang) toUpdate.NumberOfLang = req.body.NumberOfLang; 
        if(req.body.Data) toUpdate.Data = req.body.Data; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// VIEWS
// Handle a show all view
exports.language_view_all_Page = async function(req, res) {
    try{
    theLanguages = await Language.find();
    res.render('Language', { title: 'Language Search Results', results: theLanguages });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific Language. 
exports.language_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Language.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
   