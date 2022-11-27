/* eslint-disable no-unused-vars */
import React, { Component, createElement } from "react"
import $ from "jquery"
import styles from "./soleil.module.scss"
import { Container, Row, Col } from "react-bootstrap"

class soleil extends Component {
  monIntro() {
    //FPS control
    var fps = 60,
      now,
      then = Date.now(),
      interval = 1000 / fps,
      delta
    var divSoleil = document.getElementById("s0leil")

    //Sonic Factory
    class Sonic {
      constructor() {
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
        divSoleil.appendChild(this.div)
      }
      sonicMarche() {
        this.idmarche = requestAnimationFrame(this.sonicMarche.bind(this))
        //FPS control
        if (delta > interval * 1.2) {
          //code for
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
        //FPS control
        if (delta > interval) {
          //code for
          if (parseFloat(this.div.style.left) < 100) {
            this.div.style.left = parseFloat(this.div.style.left) + 0.2 + "%"
          } else {
            this.div.style.left = "-10%"
          }
        }
      }
      sonicSennuie() {
        this.idSennuie = requestAnimationFrame(this.sonicSennuie.bind(this))
        //FPS control
        if (delta > interval * 1.4) {
          //code for
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
        this.video.autoplay = true
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
        divSoleil.appendChild(this.div)
      }
    }

    //PALM TREE Factory
    class Monkey {
      constructor() {
        this.cpt = 0
        this.back = false

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

        //SINGE: Génération des éléments html
        divSoleil.appendChild(this.div)
        divSoleil.appendChild(this.imgPalm)
        this.div.appendChild(this.imgMonkey)
      }
      monkeyDown() {
        this.idMD = requestAnimationFrame(this.monkeyDown.bind(this))
        //FPS control
        if (delta > interval * 1.25) {
          //code for
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
        if (delta > interval * 1.25) {
          //code for
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

    // class Nuage {
    //   constructor() {
    //     this.image = document.createElement("img")
    //     this.image.id = "cloud"
    //     this.image.src = "/img/cloud.png"
    //     this.image.className = "cloud"
    //     this.image.style.position = "absolute"
    //     this.image.style.width = "100%"
    //     this.image.style.left = "600px"
    //     this.image.style.top = "-460px"
    //     this.image.style.height = "200%"
    //     this.image.style.borderRadius = "10px"
    //     divSoleil.appendChild(this.image)
    //   }
    //   moveCloud() {
    //     requestAnimationFrame(this.moveCloud.bind(this))
    //     //FPS control
    //     if (delta > interval) {
    //       //code for
    //       if (parseFloat(this.image.style.left) > -1050) {
    //         this.image.style.left =
    //           parseFloat(this.image.style.left) - 0.2 + "px"
    //       } else {
    //         this.image.style.left = "700px"
    //       }
    //     }
    //   }
    // }

    //CIEL FACTORY
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
        divSoleil.appendChild(this.canvas)
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
        divSoleil.appendChild(this.canvas)
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
        divSoleil.appendChild(this.canvas)
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
        divSoleil.appendChild(this.canvas)
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
        divSoleil.appendChild(this.canvas)
      }
    }

    class Soleil {
      constructor() {
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
        this.nuit = new Nuit()
        this.lune = new Lune()
        divSoleil.appendChild(this.canvas)
        this.mer = new Mer()
        this.hill = new Hill()
        // this.nuage = new Nuage()
        // this.nuage.moveCloud()
        this.monkey = new Monkey()
        this.atari = new Atari()
        this.tabSonic = []
        for (let i = 0; i <= 21; ++i) this.tabSonic[i] = new Sonic()
        this.bouclePrincpale()
      }
      // Mouvement du soleil avec animation des objets selon sa position (this.c00rdX)
      bouclePrincpale(/*m0ntimestamp*/) {
        requestAnimationFrame(this.bouclePrincpale.bind(this))
        //FPS CONTROL
        now = Date.now()
        delta = now - then
        if (delta > interval) {
          then = now - (delta % interval)
          //FPS CONTROL: code for drawing
          if (this.c00rdX < 120) {
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
                for (var i = 0; i < this.tabSonic.length; ++i) {
                  cancelAnimationFrame(this.tabSonic[i].idSennuie)
                  this.tabSonic[i].sonicMarche()
                  this.tabSonic[i].sonicSeDeplace()
                }
                //snowBack.play()
                break
              case 62:
                cancelAnimationFrame(this.monkey.idMD)
                this.monkey.monkeyUp()
                break
              case 82:
                cancelAnimationFrame(this.monkey.idMU)
                this.monkey.monkeyDown()
                break
              case 99:
                cancelAnimationFrame(this.monkey.idMD)
                this.monkey.monkeyUp()
                break
              case 107:
                for (i = 0; i < this.tabSonic.length; ++i) {
                  cancelAnimationFrame(this.tabSonic[i].idmarche)
                  cancelAnimationFrame(this.tabSonic[i].idSeDeplace)
                  this.tabSonic[i].sonicSennuie()
                }
                break
              case 110:
                //snowBack.pause()
                $("#nuit").fadeIn(1000)
                break
              case 111:
                $("#moon").fadeIn(2000)
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