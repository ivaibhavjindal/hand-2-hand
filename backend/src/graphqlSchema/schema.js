const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const hello = require("../models/helloModels.js");
const Query = new GraphQLObjectType({
  name: "Querry",
  fields: {
    hello: hello.queries.hello,
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
