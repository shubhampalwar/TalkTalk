const USERS = require("../../libs/constants");

module.exports = (_, arg) => {
    const { id } = arg;
  const user = USERS.find(user => id === user.id);
  return user;
};
