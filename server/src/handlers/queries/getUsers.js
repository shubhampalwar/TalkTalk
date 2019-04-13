const { USERS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");

module.exports = (_, __, context) => {
  const { id } = jwt.verify(context.token, process.env.KEY);

  const users = USERS.filter(user => id !== user.id);
  return users;
};
