const { CHATS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");
const uuidv1 = require('uuid/v1')
const { pubsub } = require('../../Server')

module.exports = (_, arg, context) => {
  const { id } = jwt.verify(context.token, process.env.KEY);
  const message = { ...arg, sentBy: id, id: uuidv1(), createdAt: Date.now() };
  CHATS.push(message);
  pubsub.publish(arg.sendTo, { msgSubscription: message })
  return message;
};
