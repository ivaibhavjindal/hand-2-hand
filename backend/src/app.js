var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var graphqlSchema = require("../src/graphqlSchema/schema.js");
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
