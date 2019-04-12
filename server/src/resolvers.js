const { getUsers, getUser } = require('./handlers/queries')
const { registration } = require('./handlers/mutations')

const resolvers = {
  Query: {
    getUsers: getUsers,
    getUser: getUser,
  },
  Mutation: {
    registration: registration,
  }
};

module.exports = resolvers;
