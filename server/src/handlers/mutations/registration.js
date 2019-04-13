const { USERS } = require("../../libs/constants");
const uuidv1 = require("uuid/v1");
const jwt = require("jsonwebtoken");

module.exports = (_, arg) => {
  const { name, email, password } = arg;
  if (USERS.find(user => user.email === email)) return "email already in use";
  const newUser = { ...arg, id: uuidv1() };
  USERS.push(newUser);
  const token = jwt.sign(newUser, process.env.KEY);
  pubsub.publish('USER_ADDED', newUser)
  return token;
};
