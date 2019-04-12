const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getUsers(id: ID!): [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    registration(name: String!, email: String!, password: String!): String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
