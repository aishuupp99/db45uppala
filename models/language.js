const mongoose = require("mongoose")
const languageSchema = mongoose.Schema({
Types:{type:String,required:true},
Data: {type:String,required:true},
NumberOfLang: {type:Number, min:1,max:45},
})
module.exports = mongoose.model("Language",languageSchema);

