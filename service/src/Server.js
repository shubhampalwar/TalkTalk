const express = require("express");
const ServerIO = require("socket.io");
const http = require("http");
const { notFoundRoute, errorHandlerRoute } = require("./libs/routes");

class Server {
  constructor(config) {
    this.config = config;
    this.app = express();
  }

  bootstrap() {
    this.server = http.createServer(this.app);
    return this;
  }

  run() {
    const { port, env } = this.config;
    const { server } = this;
    server.listen(port, () =>
      console.log(`🚀 Server ready at http://localhost:${port}`)
    );
  }

  setupSocketIO() {
    const { server } = this;
    this.io = ServerIO(server, {
      path: "test",
      serveClient: false,
      pingInterval: 100000,
      pingTimeout: 5000,
      cookie: false
    });
    this.run();
    this.setupRoutes();
  }

  setupRoutes() {
    const { app, io } = this;
    app.use("/health-check", (req, res) => {
      res.send("I am OK");
    });
    // app.get("/", (req, res) => {
    //   res.sendFile(__dirname + "/index.html");
    // });
    app.use(notFoundRoute);
    app.use(errorHandlerRoute);
    io.on("connection", socket => {
        console.log("a user connected");
        // console.log(socket);        
      });
  }
}

module.exports = Server;
