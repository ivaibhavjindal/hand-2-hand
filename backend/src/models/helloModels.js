const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const queries = {
  hello: {
    type: GraphQLString,
    resolve(parent, args, req) {
      return "Hello";
    },
  },
};

module.exports = {
  queries: queries,
};
