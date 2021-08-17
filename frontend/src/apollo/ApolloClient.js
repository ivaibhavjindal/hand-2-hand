import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import env from "../config/env";

const httpLink = new HttpLink({ uri: env.baseURL + "app/graphiql" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
