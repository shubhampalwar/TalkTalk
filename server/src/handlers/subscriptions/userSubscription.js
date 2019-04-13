const { PubSub } = require("apollo-server-express");
// const { USERS } = require("../../libs/constants");

const pubsub = new PubSub();

const subscribe = (arg) => pubsub.asyncIterator([arg]);

module.exports = subscribe;
