/* eslint-disable react/react-in-jsx-scope */
import Header from "../components/Header"
import React, { Component } from "react"
import io from "socket.io-client"
import $ from "jquery"
import { Col, Container, Row } from "react-bootstrap"

class Pong extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hello: "",
    }
  }

  componentDidMount() {
    //socketIO
    this.socket = io()
    this.socket.on("now", (data) => {
      this.setState({
        hello: data.message,
      })
    })

    var socket = io()
    $("form").submit(function (e) {
      e.preventDefault()
      socket.emit("chat message", $("#m").val())
      $("#m").val("")
      return false
    })
    socket.on("chat message", function (msg) {
      $("#messages").append($("<li>").text(msg))
    })

    //FPS control
    var fps = 60,
      now,
      then = Date.now(),
      interval = 1000 / fps,
      delta
    var pongDiv = document.getElementById("pongDiv")

    class Paddle {
      constructor(id, styleLeft) {
        this.div = document.createElement("div")
        this.X = this.div.style.left
        this.Y = this.div.style.top
        this.div.id = id
        this.div.style.position = "absolute"
        this.div.style.height = "85px"
        this.div.style.width = "25px"
        this.div.style.left = styleLeft + "px"
        this.div.style.top =
          pongDiv.offsetHeight / 2 +
          pongDiv.offsetTop -
          parseInt(this.div.style.height) / 2 +
          "px"
        this.div.style.backgroundColor = "black"
        pongDiv.appendChild(this.div)
      }
    }
    class PixelBall {
      constructor() {
        this.div = document.createElement("div")
        this.X = this.div.style.left
        this.Y = this.div.style.top
        this.angle = 1
        this.vitesse = 1
        this.goLeft = false
        this.goDown = false
        this.div.id = "pixelBall"
        this.div.style.position = "absolute"
        this.div.style.height = "15px"
        this.div.style.width = "15px"
        this.div.style.top =
          pongDiv.offsetHeight / 2 +
          pongDiv.offsetTop +
          this.div.offsetHeight / 2 +
          "px"
        this.div.style.left =
          pongDiv.offsetWidth / 2 +
          pongDiv.offsetLeft -
          parseInt(this.div.style.height) / 2 +
          "px"
        this.div.style.backgroundColor = "white"
        pongDiv.appendChild(this.div)
      }
      deplacerBall() {
        this.idDeplacerBall = requestAnimationFrame(
          this.deplacerBall.bind(this)
        )
        //FPS control
        now = Date.now()
        delta = now - then
        if (delta > interval) {
          //ball move left right limit
          if (
            this.X <
              pongDiv.offsetLeft + pongDiv.offsetWidth - this.div.offsetWidth &&
            !this.goLeft
          ) {
            this.X = this.X + this.angle * this.vitesse
            this.div.style.left = this.X + "px"
          } else if (this.X > pongDiv.offsetLeft) {
            this.goLeft = true
            this.X = this.X - this.angle * this.vitesse
            this.div.style.left = this.X + "px"
          } else {
            this.goLeft = false
            //play(pongA)
          }
          //ball move up down limit
          if (this.Y >= pongDiv.offsetTop && !this.goDown) {
            this.Y = this.Y - 1 * this.vitesse
            this.div.style.top = this.Y + "px"
          } else if (
            this.Y <
            pongDiv.offsetTop +
              pongDiv.offsetHeight -
              parseInt(this.div.style.height)
          ) {
            this.goDown = true
            this.Y = this.Y + 1 * this.vitesse
            this.div.style.top = this.Y + "px"
          } else {
            //YOU MISSSSS
            this.goDown = false
            //clickMove = true
            /*
            //play(miss)
            this.X =
              linkedIn.offsetLeft +
              linkedIn.offsetWidth / 2 -
              this.div.offsetWidth / 2
            this.Y = linkedIn.offsetTop - this.div.offsetHeight
            this.div.style.left = this.X + "px"
            this.div.style.top = this.Y + "px"
            this.goLeft = false
            this.angle = 1
          */
          }
        }
      }
    }

    const paddle1 = new Paddle("paddle1", pongDiv.offsetLeft + 20)
    const paddle2 = new Paddle(
      "paddle2",
      pongDiv.offsetLeft + pongDiv.offsetWidth - paddle1.div.offsetWidth - 20
    )
    const ball = new PixelBall()

    //____________________________________TouchMove_eventListener___________________________________

    var addtouchEvent1 = (paddleDiv) => {
      var box2 = paddleDiv.div, //document.getElementById(paddleDiv),
        boxtop,
        starty,
        touchobj = null // Touch object holder
      var eTouchStart = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point
        boxtop = parseInt(box2.style.top) // get left position of box
        starty = parseInt(touchobj.pageY) // get x coord of touch point
        e.preventDefault() // prevent default click behavior
      }
      var eTouchMove = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.pageY) - starty // calculate dist traveled by touch point
        box2.style.top =
          boxtop + dist > pongDiv.offsetHeight - 20
            ? pongDiv.offsetHeight - 20 + "px"
            : boxtop + dist < pongDiv.offsetTop
            ? pongDiv.offsetTop + 3 + "px"
            : boxtop + dist + "px"

        socket.emit("movePaddle1", this.style.top)
      }
      paddleDiv.div.addEventListener("touchstart", eTouchStart, true)
      paddleDiv.div.addEventListener("touchmove", eTouchMove, true)
    }
    addtouchEvent1(paddle1)
    socket.on("movePaddle1", function (paddleY) {
      paddle1.div.style.top = paddleY
    })

    var addtouchEvent2 = (paddleDiv) => {
      var box2 = paddleDiv.div, //document.getElementById(paddleDiv),
        boxtop,
        starty,
        touchobj = null // Touch object holder
      var eTouchStart = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point
        boxtop = parseInt(box2.style.top) // get left position of box
        starty = parseInt(touchobj.pageY) // get x coord of touch point
        e.preventDefault() // prevent default click behavior
      }
      var eTouchMove = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.pageY) - starty // calculate dist traveled by touch point
        box2.style.top =
          boxtop + dist > pongDiv.offsetHeight - 20
            ? pongDiv.offsetHeight - 20 + "px"
            : boxtop + dist < pongDiv.offsetTop
            ? pongDiv.offsetTop + 3 + "px"
            : boxtop + dist + "px"

        socket.emit("movePaddle2", this.style.top)
      }
      paddleDiv.div.addEventListener("touchstart", eTouchStart, true)
      paddleDiv.div.addEventListener("touchmove", eTouchMove, true)
    }
    addtouchEvent2(paddle2)
    socket.on("movePaddle2", function (paddleY) {
      paddle2.div.style.top = paddleY
    })

    //collision balle paddle

    //animation balle
    ball.deplacerBall()
    //Main()
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <h1>Pong Game</h1>
              <div id="pongDiv"></div>
              <div id="chat">
                <h1>{this.state.hello}</h1>
                <ul id="messages"></ul>
                <form className="form" action="">
                  <input id="m" autoComplete="off" />
                  <button>Send</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Pong
