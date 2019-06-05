// const app = require("express")();
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", socket => {
//   console.log("a user connected");
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
//   socket.on("chat message", msg => {
//     io.emit('chat message', msg);
//     // console.log("message: ", msg);
//   });
// });

// http.listen(9000, () => {
//   console.log("listening on *: 9000");
// });

const Server = require("./Server");
const configuration = require("./config");


const server = new Server(configuration)

const initServer = () => {
  server.bootstrap().setupSocketIO();
}

initServer();
