/* eslint-disable no-unused-vars */
import React, { Component, createElement } from "react"
import { Container, Row, Col } from "react-bootstrap"
import $ from "jquery"

class soleil extends Component {
  monIntro() {
    class Sonic {
      constructor() {
        //FPS control
        this.then = Date.now()

        //div
        this.div = document.createElement("div")
        this.div.className = "divSonic"
        this.div.style.overflow = "hidden"
        this.pos = this.div.style.position = "absolute"
        this.haut = this.div.style.height = "48px"
        this.larg = this.div.style.width = "48px"
        this.top = this.div.style.top = Math.floor(Math.random() * Math.floor(50)) + 200 + "px"
        this.gauche = this.div.style.left = Math.floor(Math.random() * Math.floor(96)) + "%"

        //sprite
        this.image = document.createElement("img")
        this.image.className = "sonic"
        this.image.src = "/img/sonic2.png"
        this.image.style.position = "relative"
        this.image.style.left = "-55px"
        this.image.style.top = "-21px"
        this.div.appendChild(this.image)
      }

      sonicMarche() {
        this.fps = 40
        this.interval = 1000 / this.fps

        cancelAnimationFrame(this.idSennuie)
        this.idmarche = requestAnimationFrame(this.sonicMarche.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //Animation sprite sonic marche
          if (this.bool2 === false) {
            this.image.style.left = "-50px"
            this.image.style.top = "-95px"
            this.bool2 = true
          } else {
            if (parseFloat(this.image.style.left) > -200) {
              this.image.style.left = parseFloat(this.image.style.left) - 49 + "px"
            } else this.bool2 = false
          }

          //sonic se déplace
          if (parseFloat(this.div.style.left) < 100) {
            this.div.style.left = parseFloat(this.div.style.left) + 0.5 + "%"
          } else {
            this.div.style.left = "-10%"
          }
        }
      }

      sonicSennuie() {
        this.fps = 10
        this.interval = 1000 / this.fps

        cancelAnimationFrame(this.idmarche)
        this.idSennuie = requestAnimationFrame(this.sonicSennuie.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          if (this.bool === false) {
            this.image.style.left = "-55px"
            this.image.style.top = "-21px"
            this.bool = true
          } else {
            if (parseFloat(this.image.style.left) > -200) {
              this.image.style.left = parseFloat(this.image.style.left) - 49 + "px"
            } else this.bool = false
          }
        }
      }
    }

    class Atari {
      constructor(posX, posY, size) {
        this.video = document.createElement("video")
        this.video.style.position = "absolute"
        this.video.style.top = "7%"
        this.video.style.right = "34%"
        this.video.style.width = "38%"
        this.video.playsinline = true
        this.video.muted = true
        this.video.loop = true

        this.source = document.createElement("source")
        this.source.src = "/img/360backnoreverse.mp4"
        this.source.type = "video/mp4"

        this.div = document.createElement("div")
        this.div.style.position = "absolute"
        this.div.style.right = posX + 'px'
        this.div.style.top = posY + 'px'

        this.img = document.createElement("img")
        this.img.src = "/img/Atari.png"
        this.img.style.position = "relative"
        this.img.style.height = size + 'px'

        //Génération des éléments html
        this.video.appendChild(this.source)
        this.div.appendChild(this.video)
        this.div.appendChild(this.img)
      }
    }

    class Monkey {
      constructor() {
        this.div = document.createElement("div")
        this.div.className = "divMonkey"
        this.div.style.position = "absolute"
        this.div.style.height = "140px"
        this.div.style.width = "95px"
        this.div.style.left = "59.55px"
        this.div.style.top = "50px"
        this.div.style.overflow = "hidden"

        this.imgMonkey = document.createElement("img")
        this.imgMonkey.className = "monkey"
        this.imgMonkey.src = "/img/monkey.png"
        this.imgMonkey.style.position = "absolute"
        this.imgMonkey.style.height = "100%"
        this.imgMonkey.style.left = "-2215px"

        this.imgPalm = document.createElement("img")
        this.imgPalm.className = "palmTree"
        this.imgPalm.src = "/img/palmTree.png"
        this.imgPalm.style.position = "absolute"
        this.imgPalm.style.height = "65%"
        this.imgPalm.style.top = "30px"
        this.imgPalm.style.left = "5px"

        this.cpt = 0
        this.back = false

        //FPS control
        this.fps = 20
        this.interval = 1000 / this.fps
        this.now
        this.then = Date.now()
        this.delta

        this.div.appendChild(this.imgMonkey)
      }

      monkeyDown() {
        cancelAnimationFrame(this.idMU)
        this.idMD = requestAnimationFrame(this.monkeyDown.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          if (parseFloat(this.imgMonkey.style.left) <= 0 && !this.back) {
            this.imgMonkey.style.left =
              parseFloat(this.imgMonkey.style.left) + 105.52 + "px"
            this.cpt++
          } else {
            this.back = true
          }
        }
      }

      monkeyUp() {
        cancelAnimationFrame(this.idMD)
        this.idMU = requestAnimationFrame(this.monkeyUp.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          if (this.cpt > 0) {
            this.imgMonkey.style.left =
              parseFloat(this.imgMonkey.style.left) - 105.52 + "px"
            this.cpt--
          } else {
            this.back = false
          }
        }
      }
    }


    class Ciel {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.className = "ciel"
        this.canvas.style.position = "absolute"
        this.canvas.style.display = "block"
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.margin = 0

        this.ctx = this.canvas.getContext('2d')
        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 600)
        this.gradient.addColorStop(0, "blue")
        this.gradient.addColorStop(0.6, "white")
        this.ctx.fillStyle = this.gradient
        this.ctx.fillRect(0, 0, 600, 400)
      }
    }

    class Nuit {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.className = 'nuit'
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.position = "absolute"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.backgroundColor = "rgba(0, 0, 0, 0.90)"
      }
    }

    class matrixRain {
      constructor() {
        this.img = document.createElement('img')
        this.img.className = 'matrix'
        this.img.src = "/img/matrixRain.gif"
        this.img.style.position = "absolute"
        this.img.width = 600
        this.img.height = 400
      }
    }

    class Lune {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.className = "moon"
        this.canvas.width = 40
        this.canvas.height = 40
        this.canvas.style.width = "50px"
        this.canvas.style.position = "absolute"
        this.canvas.style.top = "30px"
        this.canvas.style.right = "10%"
        this.ctx = this.canvas.getContext("2d")
        this.gradient = this.ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
        this.gradient.addColorStop(0, "transparent")
        this.gradient.addColorStop(0.9, "white")
        this.ctx.fillStyle = this.gradient
        this.ctx.fillRect(0, 0, 40, 40)
      }
    }

    class Mer {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.className = "mer"
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.position = "absolute"
        this.canvas.style.display = "block"
        this.ctx = this.canvas.getContext("2d")

        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 600)
        this.gradient.addColorStop(0, "navy")
        this.gradient.addColorStop(0.9, "navy")
        this.ctx.fillStyle = this.gradient

        this.ctx.beginPath()
        this.ctx.moveTo(0, 600)
        this.ctx.lineTo(600, 400)
        this.ctx.lineTo(600, 250)
        this.ctx.bezierCurveTo(250, 250, 600, 250, 0, 250)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
      }
    }

    class Hill {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.className = "hill"
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.display = "block"
        this.canvas.style.position = "absolute"
        this.ctx = this.canvas.getContext("2d")

        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 600)
        this.gradient.addColorStop(0, "yellow")
        this.gradient.addColorStop(0.8, "black")

        this.ctx.fillStyle = this.gradient
        this.ctx.beginPath()
        this.ctx.moveTo(0, 400)
        this.ctx.lineTo(600, 400)
        this.ctx.lineTo(600, 300)
        this.ctx.bezierCurveTo(300, 250, 280, 200, 0, 300)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
      }
    }

    class Soleil {
      constructor() {
        //coordonnées soleil
        this.c00rdX = 10
        this.c00rdY = 2
        
        this.canvas = document.createElement("canvas")
        this.canvas.className = "soleil"
        this.canvas.width = 40
        this.canvas.height = 40
        this.canvas.style.width = "40px"
        this.canvas.style.position = "absolute"
        this.ctx = this.canvas.getContext("2d")

        this.gradient = this.ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
        this.gradient.addColorStop(0, "transparent")
        this.gradient.addColorStop(0.9, "yellow")
        this.ctx.fillStyle = this.gradient
        this.ctx.fillRect(0, 0, 40, 40)
      }

      moveSoleil() {
        if (this.c00rdX < 145) {
          this.c00rdY = Math.cos(this.c00rdX / 28) * 54
          this.canvas.style.top = this.c00rdY + 60 + "%"
          this.canvas.style.left = this.c00rdX - 40 + "%"
          this.c00rdX = this.c00rdX + 0.2
        }
        else {
          this.c00rdX = 10
        }
        //}
      }
    }

    class univers {
      constructor() {
        //FPS control
        this.then = Date.now()

        this.div = document.getElementById('univers')
        this.div.style.position = "relative"
        this.div.style.display = "block"
        this.div.style.overflow = "hidden"
        this.div.style.height = "300px"
        this.div.style.marginLeft = "1%"

        //Création de l'environnement 
        this.ciel = new Ciel()
        this.nuit = new Nuit()
        this.matrix = new matrixRain()
        this.lune = new Lune()
        this.soleil = new Soleil()
        this.mer = new Mer()
        this.hill = new Hill()
        this.monkey = new Monkey()
        this.atari = new Atari(40, 100, 175)

        this.div.appendChild(this.ciel.canvas)
        this.div.appendChild(this.nuit.canvas)
        this.div.appendChild(this.matrix.img)
        this.div.appendChild(this.lune.canvas)
        this.div.appendChild(this.soleil.canvas)
        this.div.appendChild(this.mer.canvas)
        this.div.appendChild(this.hill.canvas)
        this.div.appendChild(this.monkey.div)
        this.div.appendChild(this.monkey.imgPalm)
        this.div.appendChild(this.atari.div)

        this.tabSonic = []
        for (let i = 0; i <= 21; ++i) {
          this.tabSonic[i] = new Sonic()
          this.div.appendChild(this.tabSonic[i].div)
        }

      }
      universMove() {
        this.idUniversMove = requestAnimationFrame(this.universMove.bind(this))

        //FPS control
        this.fps = 50
        this.interval = 1000 / this.fps

        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          this.soleil.moveSoleil()

          switch (Math.floor(this.soleil.c00rdX)) {
            case 37:
              $(".nuit").fadeOut(3000)
              $(".matrix").fadeOut(3000)
              $(".moon").fadeOut(2000)
              break

            case 38:
              this.monkey.monkeyDown()
              break

            case 45:
              for (let i = 0; i < this.tabSonic.length; ++i) {
                this.tabSonic[i].sonicMarche()
              }
              this.atari.video.play()
              break

            case 70:
              this.monkey.monkeyUp()
              break

            case 95:
              this.monkey.monkeyDown()
              break

            case 125:
              $(".moon").fadeIn(3000)
              this.monkey.monkeyUp()
              break

            case 130:
              this.atari.video.pause()
              $(".nuit").fadeIn(3000)
              $(".matrix").fadeIn(3000)
              for (let i = 0; i < this.tabSonic.length; ++i) {
                this.tabSonic[i].sonicSennuie()
              }
              break
          }
        }
      }
    }

    //FULL OBJECT done----------------------------------------
    let univers1 = new univers()
    univers1.universMove()

  }
  componentDidMount() {
    this.monIntro()
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div id="univers"></div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default soleil