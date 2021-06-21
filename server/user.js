const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: String,
  firstname: String,
  lastname:String,
  title:String,
  company:String
});

module.exports = mongoose.model("User", user);