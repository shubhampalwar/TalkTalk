const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type Query {
    getUsers: [User]!
    getUser(id: ID!): User!
    login(email: String!, password: String!): String!
    getChat(id: ID!): [Message]
    go: String
  }

  type Mutation {
    registration(name: String!, email: String!, password: String!): String!
    sendMessage(text: String!, sendTo: ID!): Message
    deleteMessage(id: ID!): Message
  }

  type Subscription {
    msgSubscription: Message
    userSubscription: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Message {
    id: ID!
    sentBy: ID!
    sendTo: ID!    
    text: String!
    createdAt: Date!
    deletedAt: Date
  }
`;

module.exports = typeDefs;
