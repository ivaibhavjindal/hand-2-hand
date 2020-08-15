const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const graphqlSchema = require("../src/graphqlSchema/schema.js");
const Mongoose = require("./configuration/mongooseConfig.js");
var app = express();

app.get("/app", function (req, res) {
  res.send("server running");
});

app.use(
  "/app/graphiql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
  })
);

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started ..");
});
