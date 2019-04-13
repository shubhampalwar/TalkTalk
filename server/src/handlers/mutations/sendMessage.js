const { CHATS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");
const uuidv1 = require('uuid/v1')

module.exports = (_, arg, context) => {
  const { id } = jwt.verify(context.token, process.env.KEY);
  const message = { ...arg, sentBy: id, id: uuidv1(), createdAt: Date.now() };
  CHATS.push(message);
  console.log(CHATS);
  return message;
};
