const { Server } = require("./Server");
const configuration = require("./config");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const jwt = require('jsonwebtoken')

const server = new Server(configuration);

const context = ({ req, connection }) => {
  if (connection) {
    jwt.verify(connection.context.authorization, process.env.KEY)
    return connection.context;
  }
  const token = req.headers.authorization || "";
  return { token };
};

const initServer = () => {
  server.bootstrap().setupApollo({ typeDefs, resolvers });
};

initServer();
