const { MisdirectedRequest } = require("http-errors")
const mongoose = require("mongoose")
const languageSchema = mongoose.Schema({
Types: String,
Data: String,
NumberOfLang: Number
})
module.exports = mongoose.model("Language",
languageSchema)

