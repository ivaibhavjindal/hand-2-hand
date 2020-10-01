const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const authSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
});

authSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("auth", authSchema);
