const graphql = require("graphql");
const UserDetail = require("../services/UserDetailService.js");

const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} = graphql;

const UserDetailOutput = new GraphQLObjectType({
  name: "UserDetailOutput",
  fields: () => ({
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    fullAddress: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
  }),
});

const AddUserDetailInput = new GraphQLInputObjectType({
  name: "AddUserDetailInput",
  fields: () => ({
    firstname: {
      type: GraphQLString,
    },
    lastname: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    fullAddress: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
  }),
});

const GetUserDetailByUserNameInput = new GraphQLInputObjectType({
  name: "GetUserDetailByUserNameInput",
  fields: () => ({
    username: {
      type: GraphQLString,
    },
  }),
});

const queries = {
  getUserDetailByUserName: {
    type: UserDetailOutput,
    args: {
      input: {
        type: GetUserDetailByUserNameInput,
      },
    },
    resolve(parent, args, req) {
      return UserDetail.getUserDetailById(args.input);
    },
  },
};

const mutations = {
  addUserDetail: {
    type: graphql.GraphQLBoolean,
    args: {
      input: {
        type: AddUserDetailInput,
      },
    },
    resolve(parent, args, req) {
      if (!req.isAuthenticated()) return false;
      return UserDetail.addUserDetail(args.input)
        .then((data) => {
          return true;
        })
        .catch((error) => {
          return error;
        });
    },
  },
};

module.exports = {
  queries: queries,
  mutations: mutations,
};
