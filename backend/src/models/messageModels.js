const graphql = require("graphql");
const Message = require("../services/MessageService.js");
const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = graphql;

const AddMessageInput = new GraphQLInputObjectType({
  name: "AddMessageInput",
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    message: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

const MessageOutput = new GraphQLObjectType({
  name: "MessageOutput",
  fields: () => ({
    _id: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
  }),
});

const queries = {
  getAllMessage: {
    type: new GraphQLList(MessageOutput),
    resolve(parent, args, req) {
      return Message.getAllMessages();
    },
  },
};

const mutations = {
  addMessage: {
    type: graphql.GraphQLBoolean,
    args: {
      input: {
        type: AddMessageInput,
      },
    },
    resolve(parent, args, req) {
      return Message.addMessage(args.input);
    },
  },
};

module.exports = {
  queries: queries,
  mutations: mutations,
};
