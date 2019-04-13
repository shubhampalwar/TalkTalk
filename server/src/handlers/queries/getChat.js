const { CHATS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");

module.exports = (_, arg, context) => {
  const { token } = context;
  const user = jwt.verify(token, process.env.KEY);
  const { id } = arg;

  const chat = CHATS.filter(message => {
    const { sendTo, sentBy } = message;
    if ((sendTo === user.id && sentBy === id) || (sendTo === id && sentBy === user.id))
    return message
  })

  return chat;
};
