/* eslint-disable no-unused-vars */
import React, { Component, createElement } from "react"
import $ from "jquery"
import styles from "./soleil.module.scss"
import { Container, Row, Col } from "react-bootstrap"

class soleil extends Component {
  monIntro() {
    //Sonic Factory
    class Sonic {
      constructor() {
        //FPS control
        this.fps = 20
        this.now = Date.now()
        this.then = Date.now()
        this.interval = 1000 / this.fps
        this.delta

        //div
        this.div = document.createElement("div")
        this.classe = this.div.className = "divSonic"
        this.div.style.overflow = "hidden"
        this.pos = this.div.style.position = "absolute"
        this.haut = this.div.style.height = "48px"
        this.larg = this.div.style.width = "48px"
        this.top = this.div.style.top = Math.floor(Math.random() * Math.floor(50)) + 200 + "px"
        this.gauche = this.div.style.left = Math.floor(Math.random() * Math.floor(96)) + "%"
        //sprite
        this.image = document.createElement("img")
        this.image.src = "/img/sonic2.png"
        this.image.className = "sonic"
        this.image.style.position = "relative"
        this.image.style.left = "-55px"
        this.image.style.top = "-21px"
        this.div.appendChild(this.image)
      }

      sonicMarche() {
        this.idmarche = requestAnimationFrame(this.sonicMarche.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //FPS CONTROL: code for drawing
          if (this.bool2 === false) {
            this.image.style.left = "-50px"
            this.image.style.top = "-95px"
            this.bool2 = true
          } else {
            if (parseFloat(this.image.style.left) > -200) {
              this.image.style.left = parseFloat(this.image.style.left) - 49 + "px"
            } else this.bool2 = false
          }
        }
      }

      sonicSeDeplace() {
        this.idSeDeplace = requestAnimationFrame(this.sonicSeDeplace.bind(this))
        if (parseFloat(this.div.style.left) < 100) {
          this.div.style.left = parseFloat(this.div.style.left) + 0.2 + "%"
        } else {
          this.div.style.left = "-10%"
        }
      }

      sonicSennuie() {
        this.idSennuie = requestAnimationFrame(this.sonicSennuie.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //FPS CONTROL: code for drawing
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

    //Atari Factory
    class Atari {
      constructor() {
        this.video = document.createElement("video")
        this.video.id = "snowB"
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
        this.div.id = "atari"
        this.div.style.position = "absolute"
        this.div.style.top = "105px"
        this.div.style.right = "10px"

        this.img = document.createElement("img")
        this.img.src = "/img/Atari.png"
        this.img.style.position = "relative"
        this.img.style.height = "150px"

        //Génération des éléments html
        this.video.appendChild(this.source)
        this.div.appendChild(this.video)
        this.div.appendChild(this.img)
      }
    }

    //PALM TREE Factory
    class Monkey {
      constructor() {
        this.cpt = 0
        this.back = false

        //FPS control
        this.fps = 15
        this.now = Date.now()
        this.then = Date.now()
        this.interval = 1000 / this.fps
        this.delta

        this.div = document.createElement("div")
        this.div.id = "divMonkey"
        this.div.className = "divMonkey"
        this.div.style.position = "absolute"
        this.div.style.height = "140px"
        this.div.style.width = "95px"
        this.div.style.top = "50px"
        this.div.style.left = "59.55px"
        this.div.style.overflow = "hidden"

        this.imgMonkey = document.createElement("img")
        this.imgMonkey.src = "/img/monkey.png"
        this.imgMonkey.id = "monkey"
        this.imgMonkey.className = "monkey"
        this.imgMonkey.style.position = "absolute"
        this.imgMonkey.style.height = "100%"
        this.imgMonkey.style.left = "-2215px"

        this.imgPalm = document.createElement("img")
        this.imgPalm.src = "/img/palmTree.png"
        this.imgPalm.id = "palmTree"
        this.imgPalm.className = "palmTree"
        this.imgPalm.style.position = "absolute"
        this.imgPalm.style.height = "65%"
        this.imgPalm.style.top = "30px"
        this.imgPalm.style.left = "5px"

        this.div.appendChild(this.imgMonkey)
      }

      monkeyDown() {
        this.idMD = requestAnimationFrame(this.monkeyDown.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //FPS CONTROL: code for drawing
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
        this.idMU = requestAnimationFrame(this.monkeyUp.bind(this))
        //FPS control
        this.now = Date.now()
        this.delta = this.now - this.then
        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //FPS CONTROL: code for drawing
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
        this.canvas.id = "ci3l"
        this.canvas.style.position = "absolute"
        this.canvas.style.display = "block"
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.margin = 0
        this.canvas.style.backgroundColor = "blue"
      }
    }

    class Nuit {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.id = "nuit"
        this.canvas.style.position = "absolute"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.backgroundColor = "black"
      }
    }

    class Lune {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 40
        this.canvas.height = 40
        this.canvas.style.width = "50px"
        this.canvas.id = "moon"
        this.canvas.style.position = "absolute"
        this.canvas.style.top = "30px"
        this.canvas.style.right = "10%"
        this.ctx = this.canvas.getContext("2d")
        this.gradient = this.ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
        this.gradient.addColorStop(0, "transparent")
        this.gradient.addColorStop(0.9, "white")
        this.ctx.fillStyle = this.gradient
      }
    }

    class Mer {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.id = "m0nC4nvaM3r"
        this.canvas.style.position = "absolute"
        this.canvas.style.display = "block"
        this.ctx = this.canvas.getContext("2d")

        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 600)
        this.gradient.addColorStop(0, "blue")
        this.gradient.addColorStop(0.7, "cyan")
        this.ctx.fillStyle = this.gradient

        this.ctx.beginPath()
        this.ctx.moveTo(0, 600)
        this.ctx.lineTo(600, 400)
        this.ctx.lineTo(600, 220)
        this.ctx.bezierCurveTo(220, 220, 600, 220, 0, 220)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
      }
    }

    class Hill {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.borderRadius = "10px"
        this.canvas.id = "m0nC4nvaC0lline"
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
        this.ctx.lineTo(600, 320)
        this.ctx.bezierCurveTo(300, 300, 280, 200, 0, 300)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
      }
    }

    class Soleil {
      constructor() {
        //FPS control
        this.fps = 60
        this.now = Date.now()
        this.then = Date.now()
        this.interval = 1000 / this.fps
        this.delta

        this.div = document.getElementById("s0leil")
        this.div.style.position = "relative"
        this.div.style.display = "block"
        this.div.style.overflow = "hidden"
        this.div.style.height = "300px"

        this.canvas = document.createElement("canvas")
        this.canvas.width = 40
        this.canvas.height = 40
        this.canvas.id = "c4nv4"
        this.canvas.style.width = "40px"
        this.canvas.style.position = "absolute"
        this.ctx = this.canvas.getContext("2d")

        this.gradient = this.ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
        this.gradient.addColorStop(0, "transparent")
        this.gradient.addColorStop(0.9, "yellow")
        this.ctx.fillStyle = this.gradient

        //coordonnées soleil
        this.c00rdX = 20
        this.c00rdY = 2

        //Création de l'environnement 
        this.ciel = new Ciel()
        this.div.appendChild(this.ciel.canvas)
        this.nuit = new Nuit()
        this.div.appendChild(this.nuit.canvas)
        this.lune = new Lune()
        this.div.appendChild(this.lune.canvas)
        this.div.appendChild(this.canvas)
        this.mer = new Mer()
        this.div.appendChild(this.mer.canvas)
        this.hill = new Hill()
        this.div.appendChild(this.hill.canvas)
        this.monkey = new Monkey()
        this.div.appendChild(this.monkey.div)
        this.div.appendChild(this.monkey.imgPalm)
        this.atari = new Atari()
        this.div.appendChild(this.atari.div)

        this.tabSonic = []
        for (let i = 0; i <= 21; ++i) {
          this.tabSonic[i] = new Sonic()
          this.div.appendChild(this.tabSonic[i].div)
        }

        this.bouclePrincpale()
      }

      // Mouvement du soleil avec animation des objets selon sa position (this.c00rdX)
      bouclePrincpale(/*m0ntimestamp*/) {
        requestAnimationFrame(this.bouclePrincpale.bind(this))
        //FPS CONTROL
        this.now = Date.now()
        this.delta = this.now - this.then

        if (this.delta > this.interval) {
          this.then = this.now - (this.delta % this.interval)
          //FPS CONTROL: code for drawing
          if (this.c00rdX < 110) {
            this.c00rdY = Math.cos(this.c00rdX / 24) * 54
            this.canvas.style.top = this.c00rdY * 1.05 + 60 + "%"
            this.canvas.style.left = this.c00rdX * 1.3 - 50 + "%"
            this.ctx.clearRect(0, 0, 40, 40)
            this.lune.ctx.clearRect(0, 0, 40, 40)
            switch (this.c00rdX) {
              case 40:
                $("#nuit").fadeOut(1000)
                $("#moon").fadeOut(2000)
                break
              case 44:
                cancelAnimationFrame(this.monkey.idMU)
                this.monkey.monkeyDown()
                for (let i = 0; i < this.tabSonic.length; ++i) {
                  cancelAnimationFrame(this.tabSonic[i].idSennuie)
                  this.tabSonic[i].sonicMarche()
                  this.tabSonic[i].sonicSeDeplace()
                }
                this.atari.video.play()
                break
              case 60:
                cancelAnimationFrame(this.monkey.idMD)
                this.monkey.monkeyUp()
                break
              case 80:
                cancelAnimationFrame(this.monkey.idMU)
                this.monkey.monkeyDown()
                break
              case 105:
                $("#moon").fadeIn(2000)
                break
              case 107:
                this.atari.video.pause()
                $("#nuit").fadeIn(1000)
                cancelAnimationFrame(this.monkey.idMD)
                this.monkey.monkeyUp()
                for (let i = 0; i < this.tabSonic.length; ++i) {
                  cancelAnimationFrame(this.tabSonic[i].idmarche)
                  cancelAnimationFrame(this.tabSonic[i].idSeDeplace)
                  this.tabSonic[i].sonicSennuie()
                }
                break
              default:
            }
            this.ctx.fillRect(0, 0, 40, 40)
            this.lune.ctx.fillRect(0, 0, 40, 40)
            this.c00rdX = (this.c00rdX * 10 + 0.1 * 10) / 10
          } else {
            this.c00rdX = 20
          }
        }
      }
    }
    //H3ll0 W0r1d ^^
    const soleil = new Soleil()
  }
  componentDidMount() {
    this.monIntro()
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div id="s0leil" className={styles.soleil}></div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default soleil