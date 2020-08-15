const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
mongoose.set("useNewUrlParser", true);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect("mongodb://localhost:27017/Hand2Hand");
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});
