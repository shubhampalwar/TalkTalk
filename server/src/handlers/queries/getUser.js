const { USERS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");

module.exports = (_, arg, context) => {
  const { token } = context;
  jwt.verify(token, process.env.KEY);

  const { id } = arg;
  const user = USERS.find(user => id === user.id);
  return user;
};
