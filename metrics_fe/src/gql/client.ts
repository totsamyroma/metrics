import { ApolloClient, InMemoryCache } from "@apollo/client";

const Client = new ApolloClient({
  uri: process.env.GRAPHQL_URL || "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default Client;
