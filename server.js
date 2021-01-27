/* eslint-disable no-undef */
const app = require("express")()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let port = 3000

//SocketIO
io.on("connect", (socket) => {
  socket.emit("now", {
    message: "Socket io Chat",
  })
})

io.on("connection", (socket) => {
  console.log("a user connected")

  socket.on("chat message", (msg) => {
    console.log("message: " + msg)
    io.emit("chat message", msg)
  })

  socket.on("movePaddle1", (paddleY) => {
    console.log("touchPaddleEvent: " + paddleY)
    io.emit("movePaddle1", paddleY)
  })

  socket.on("movePaddle2", (paddleY) => {
    console.log("touchPaddleEvent: " + paddleY)
    io.emit("movePaddle2", paddleY)
  })

  socket.on("disconnect", () => {
    console.log("user disconected")
  })
})

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
