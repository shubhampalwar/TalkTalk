const Server = require("./Server");
const configuration = require("./config");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new Server(configuration);

const context = ({ req }) => {
  const token = req.headers.authorization || "";
  return { token };
};

const initServer = () => {
  server.bootstrap().setupApollo({ typeDefs, resolvers });
};

initServer();
