const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetail = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  phone: String,
  city: String,
  state: String,
  fullAddress: String,
  gender: String,
});

module.exports = mongoose.model("UserDetail", UserDetail, "UserDetails");
