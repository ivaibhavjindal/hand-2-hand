var express = require("express");
var app = express();

app.get("/app", function (req, res) {
  res.send("server running");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ..");
});
