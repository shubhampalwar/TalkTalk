const { USERS } = require("../../libs/constants");
const jwt = require("jsonwebtoken");

module.exports = (_, arg) => {
  const { email, password } = arg;
  const user = USERS.find(user => user.email === email);
  if (!user) return "invalid email";
  if (user.password !== password) return "incorrect password";
  const token = jwt.sign(user, process.env.KEY);
  return token;
};
