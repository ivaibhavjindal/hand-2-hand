const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const authSchema = new mongoose.Schema({
  email: String,
  password: String,
});

authSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("auth", authSchema);
