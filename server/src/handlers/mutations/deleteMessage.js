const { CHATS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");

module.exports = (_, arg, context) => {
  jwt.verify(context.token, process.env.KEY);
  const { id } = arg;
  const index = CHATS.findIndex(message => message.id === id );
  if (CHATS[index].hasOwnProperty('deletedAt')) {
    throw "cannot delete"
  }
  CHATS[index].deletedAt = Date.now();
  return CHATS[index]
};
