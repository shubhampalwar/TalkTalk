const express = require("express");
const { PubSub } = require("apollo-server")
const { ApolloServer } = require("apollo-server-express");
const io = require('socket.io-client');
const { notFoundRoute, errorHandlerRoute } = require('./libs/routes');

let socket;

class Server {
  constructor(config) {
    this.config = config;
    this.app = express();
  }

  bootstrap() {
    const { serviceURL } = this.config;
    console.log(serviceURL)
    this.socket = io(serviceURL, {
      path: 'test'
    })
    // console.log(this.socket)
    socket = this.socket;
    return this;
  }

  run() {
    const { port } = this.config;
    const expServer = this.app.listen(port, () => {
      console.info(`🚀 Server ready at http://localhost:4000${this.server.graphqlPath}`)
    });
    this.server.installSubscriptionHandlers(expServer);
  }

  async setupApollo(data) {
    const { app } = this;
    this.server = new ApolloServer(data);
    this.server.applyMiddleware({ app, path: '/TalkTalk' });
    this.run();
    this.setupRoutes();
  }

  setupRoutes() {
      const { app } = this;
      app.use('/health-check', (req, res) => {
          res.send('I am OK');
      })
      app.use(notFoundRoute);
      app.use(errorHandlerRoute);
  }
}

const pubsub = new PubSub();

module.exports = { Server, pubsub, socket };
