const USERS = require("../../libs/constants");
const uuidv1 = require('uuid/v1');

module.exports = (_, arg) => {
    const { name, email, password } = arg;
    if ( USERS.find(user => user.email===email) ) return "email already in use"
    USERS.push({...arg, id: uuidv1() })
    console.log(USERS);
    console.log(USERS.length)
  return arg.name;
};
