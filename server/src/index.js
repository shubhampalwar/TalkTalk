const Server = require("./Server");
const configuration = require("./config");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new Server(configuration);

const initServer = () => {
  server.bootstrap().setupApollo({ typeDefs, resolvers });
};

initServer();
