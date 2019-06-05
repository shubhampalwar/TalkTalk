const { config } = require("dotenv");
config();

const configuration = Object.freeze({
    port: process.env.PORT,
    env: process.env.NODE_ENV,
})

module.exports = configuration;