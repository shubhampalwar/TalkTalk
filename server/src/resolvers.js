const { getUsers, getUser, login, getChat } = require("./handlers/queries");
const {
  registration,
  sendMessage,
  deleteMessage
} = require("./handlers/mutations");
const subscribe = require('./handlers/subscriptions')
const { pubsub } = require('./Server');
const jwt = require('jsonwebtoken')

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
    userSubscription: {
      subscribe: () => subscribe(USER_ADDED)
    },
    msgSubscription: {
      subscribe: (_,__,context) => {
        const { id } = jwt.verify(context.authorization, process.env.KEY)
        return pubsub.asyncIterator([id])
      }
    } 
  }
};

module.exports = resolvers;
