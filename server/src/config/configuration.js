const { config } = require("dotenv");
config();
const configuration = Object.freeze({
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  serviceURL: process.env.SERVICE_URL,
});

module.exports = configuration;