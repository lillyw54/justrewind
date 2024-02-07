const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    createUser(name: String!): User
  }

  type User {
    id: ID!
    name: String!
  }
`;

module.exports = typeDefs;