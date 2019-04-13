const { getUsers, getUser, login, getChat } = require("./handlers/queries");
const {
  registration,
  sendMessage,
  deleteMessage
} = require("./handlers/mutations");
const { subscribe } = require('./handlers/subscriptions')

const USER_ADDED = "USER_ADDED"

const resolvers = {
  Query: {
    getUsers,
    getUser,
    login,
    getChat,
    
  },
  Mutation: {
    registration,
    sendMessage,
    deleteMessage
  },
  Subscription: {
    userSubscription: () => subscribe(USER_ADDED)
  }
};

module.exports = resolvers;
