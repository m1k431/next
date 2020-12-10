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

  socket.on("deplacerBall", (coord) => {
    //ball move left right limit
    if (
      coord[0] <
        coord[4].offsetLeft + coord[4].offsetWidth - this.div.offsetWidth &&
      !coord[2]
    ) {
      coord[0] = coord[0] + 1 
     } else if (coord[0] > coord[4].offsetLeft) {
      coord[2] = true
      coord[0] = coord[0] - 1 
      } else {
      coord[2] = false
      //play(pongA)
    }
    //ball move up down limit
    if (coord[1] >= coord[4].offsetTop && !coord[2]) {
      coord[1] = coord[1] - 1 
      } else if (
      coord[1] <
      coord[4].offsetTop +
        coord[4].offsetHeight -
        parseInt(this.div.style.height)
    ) {
      coord[2] = true
      coord[1] = coord[1] + 1 
      } else {
      //YOU MISSSSS
      coord[2] = false
      //clickMove = true
      /*
      //play(miss)
      coord[0] =
        linkedIn.offsetLeft +
        linkedIn.offsetWidth / 2 -
        this.div.offsetWidth / 2
      coord[1] = linkedIn.offsetTop - this.div.offsetHeight
      this.div.style.left = coord[0] + "px"
      this.div.style.top = coord[1] + "px"
      coord[2] = false
      1 = 1
    */
    }



    io.emit("deplacerBall", coord)
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
