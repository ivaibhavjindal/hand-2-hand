const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const hello = require("../models/helloModels.js");
const message = require("../models/messageModels.js");
const UserDetail = require("../models/UserDetailModel.js");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: hello.queries.hello,
    getAllMessage: message.queries.getAllMessage,
    getUserDetailByUserName: UserDetail.queries.getUserDetailByUserName,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMessage: message.mutations.addMessage,
    addUserDetail: UserDetail.mutations.addUserDetail,
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
