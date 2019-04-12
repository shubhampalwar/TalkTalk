const USERS = require("../../libs/constants");

module.exports = (_, arg) => {
    const { id } = arg;
  const users = USERS.filter(user => id !== user.id);
  console.log('<<<<<<<<', users);
  return users;
};
