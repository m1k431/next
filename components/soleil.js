import React, { Component, createElement } from "react"
import $ from "jquery"
import styles from "./soleil.module.scss"
import { Container, Row, Col } from "react-bootstrap"

class soleil extends Component {
  monIntro() {
    //Sonic Factory
    class Sonic {
      constructor() {
        //div
        this.div = document.createElement("div")
        this.classe = this.div.className = "divSonic"
        this.pos = this.div.style.position = "absolute"
        this.haut = this.div.style.height = "48px"
        this.larg = this.div.style.width = "48px"
        this.top = this.div.style.top = //250 + "px"
        Math.floor(Math.random() * Math.floor(80)) + 170 + "px"
        this.gauche = this.div.style.left = //"-10%"
        Math.floor(Math.random() * Math.floor(100)) + "%"
        this.div.style.overflow = "hidden"
        //sprite
        this.image = document.createElement("img")
        this.image.className = "sonic"
        this.image.style.position = "relative"
        this.image.style.left = "-55px"
        this.image.style.top = "-21px"
        this.image.src = "/img/sonic2.png"
        this.div.appendChild(this.image)
        soleil.div.appendChild(this.div)
      }
      sonicMarche() {
        this.idmarche = requestAnimationFrame(this.sonicMarche.bind(this))
        if (delta > interval * 1.2) {
          //code for
          if (this.bool2 === false) {
            this.image.style.left = "-50px"
            this.image.style.top = "-95px"
            this.bool2 = true
          } else {
            if (parseFloat(this.image.style.left) > -200) {
              this.image.style.left =
                parseFloat(this.image.style.left) - 49 + "px"
            } else this.bool2 = false
          }
        }
      }
      sonicSeDeplace() {
        this.idSeDeplace = requestAnimationFrame(this.sonicSeDeplace.bind(this))
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
        if (delta > interval * 1.4) {
          //code for
          if (this.bool === false) {
            this.image.style.left = "-55px"
            this.image.style.top = "-21px"
            this.bool = true
          } else {
            if (parseFloat(this.image.style.left) > -200) {
              this.image.style.left =
                parseFloat(this.image.style.left) - 49 + "px"
            } else this.bool = false
          }
        }
      }
    }

    //Atari Factory
    class Atari {
      constructor() {
        this.video = document.createElement("video")
        this.video.style.position = "absolute"
        this.video.style.top = "7%"
        this.video.style.right = "34%"
        this.video.style.width = "38%"
        this.video.id = "snowB"
        this.video.playsinline = true
        this.video.autoplay = true
        this.video.muted = true
        this.video.loop = true
        this.source = document.createElement("source")
        this.source.src = "/img/360backnoreverse.mp4"
        this.source.type = "video/mp4"
        this.div = document.createElement("div")
        this.div.style.position = "absolute"
        this.div.style.top = "105px"
        this.div.style.right = "10px"
        this.div.id = "atari"
        this.img = document.createElement("img")
        this.img.style.position = "relative"
        this.img.src = "/img/Atari.png"
        this.img.style.height = "150px"
        this.video.appendChild(this.source)
        this.div.appendChild(this.video)
        this.div.appendChild(this.img)
        soleil.div.appendChild(this.div)
      }
    }

    //PALM TREE Factory
    class Monkey {
      constructor() {
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
        this.imgMonkey.id = "monkey"
        this.imgMonkey.className = "monkey"
        this.imgMonkey.style.position = "absolute"
        this.imgMonkey.style.height = "100%"
        this.imgMonkey.style.left = "-2215px"
        this.imgMonkey.src = "/img/monkey.png"
        this.imgPalm = document.createElement("img")
        this.imgPalm.id = "palmTree"
        this.imgPalm.className = "palmTree"
        this.imgPalm.style.position = "absolute"
        this.imgPalm.style.height = "65%"
        this.imgPalm.style.top = "30px"
        this.imgPalm.style.left = "5px"
        this.imgPalm.src = "/img/palmTree.png"
        soleil.div.appendChild(this.div)
        soleil.div.appendChild(this.imgPalm)
        this.div.appendChild(this.imgMonkey)
      }

      monkeyDown() {
        this.idMD = requestAnimationFrame(this.monkeyDown.bind(this))
        if (delta > interval * 1.25) {
          //code for
          if (parseFloat(this.imgMonkey.style.left) <= 0 && !back) {
            this.imgMonkey.style.left =
              parseFloat(this.imgMonkey.style.left) + 105.52 + "px"
            cpt++
          } else {
            back = true
          }
        }
      }

      monkeyUp() {
        this.idMU = requestAnimationFrame(this.monkeyUp.bind(this))
        if (delta > interval * 1.25) {
          //code for
          if (cpt > 0) {
            this.imgMonkey.style.left =
              parseFloat(this.imgMonkey.style.left) - 105.52 + "px"
            cpt--
          } else {
            back = false
          }
        }
      }
    }

    class Nuage {
      constructor() {
        this.image = document.createElement("img")
        this.image.id = "cloud"
        this.image.className = "cloud"
        this.image.style.position = "absolute"
        this.image.style.left = "600px"
        this.image.style.top = "-460px"
        this.image.style.height = "200%"
        this.image.src = "/img/cloud.png"
        soleil.div.appendChild(this.image)
      }
      moveCloud() {
        /*idCloud = */ requestAnimationFrame(this.moveCloud.bind(this))
        if (delta > interval) {
          //code for
          if (parseFloat(this.image.style.left) > -1050) {
            this.image.style.left =
              parseFloat(this.image.style.left) - 0.2 + "px"
          } else {
            this.image.style.left = "700px"
          }
        }
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
      }
    }
    //Instanciation SOLEIL car tout d'abord il faut de la lumière...
    const soleil = new Soleil()

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
        this.canvas.style.margin = 0
        this.canvas.style.backgroundColor = "blue"
        soleil.div.appendChild(this.canvas)
      }
    }

    class Nuit {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.id = "space"
        this.canvas.style.position = "absolute"
        this.canvas.style.borderRadius = "10px"
        this.canvas.style.top = "0px"
        this.canvas.style.left = "0px"
        this.canvas.style.backgroundColor = "black"
        soleil.div.appendChild(this.canvas)
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
        soleil.div.appendChild(this.canvas)
      }
    }

    class Mer {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.style.top = "50px"
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
        this.ctx.lineTo(600, 170)
        this.ctx.bezierCurveTo(170, 178, 650, 172, 0, 170)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
        soleil.div.appendChild(this.canvas)
      }
    }

    class Hill {
      constructor() {
        this.canvas = document.createElement("canvas")
        this.canvas.width = 600
        this.canvas.height = 400
        this.canvas.style.width = "100%"
        this.canvas.style.height = "100%"
        this.canvas.id = "m0nC4nvaC0lline"
        this.canvas.style.display = "block"
        this.canvas.style.position = "absolute"
        this.canvas.style.top = "45px"
        this.ctx = this.canvas.getContext("2d")
        this.gradient = this.ctx.createLinearGradient(0, 0, 0, 600)
        this.gradient.addColorStop(0, "yellow")
        this.gradient.addColorStop(0.8, "black")
        this.ctx.fillStyle = this.gradient
        this.ctx.beginPath()
        this.ctx.moveTo(0, 400)
        this.ctx.lineTo(600, 400)
        this.ctx.lineTo(600, 260)
        this.ctx.bezierCurveTo(150, 150, 250, 130, 0, 200)
        this.ctx.closePath()
        this.ctx.stroke()
        this.ctx.fill()
        soleil.div.appendChild(this.canvas)
      }
    }

    //Instanciation Ciel
    const ciel = new Ciel()
    //Instanciation Nuit
    const nuit = new Nuit()
    soleil.div.appendChild(soleil.canvas)
    //Instanciation Mer
    const mer = new Mer()
    //Instanciation Lune
    const lune = new Lune()
    //Instanciation Hill
    const hill = new Hill()
    //Instanciation Nuage
    const nuage = new Nuage()
    //Instanciation Palm Tree
    var cpt = 0,
      back = false
    const monkey = new Monkey()
    //Instanciation Atari
    const atari = new Atari()
    //Instanciation Sonic
    const tabSonic = []
    for (let i = 0; i <= 12; ++i) tabSonic[i] = new Sonic()

    //INITIALISATION ENVIRONNEMENT----------------------------------------------------
    //coordonnées soleil
    var c00rdX = 20
    var c00rdY = 2
    //nuit + nuage
    nuage.moveCloud()
    $("#space").animate(
      {
        backgroundColor: "#000000",
      },
      1000
    )
    //FPS control
    var fps = 60,
      now,
      then = Date.now(),
      interval = 1000 / fps,
      delta

    //BOUCLE PRINCIPALE---------------------------------------------------------------
    var dessinerM0n = (/*m0ntimestamp*/) => {
      requestAnimationFrame(dessinerM0n)
      //FPS CONTROL
      now = Date.now()
      delta = now - then
      if (delta > interval) {
        then = now - (delta % interval)
        //FPS CONTROL: code for drawing the frame BELOW
        if (c00rdX < 131) {
          c00rdY = Math.cos(c00rdX / 24) * 54
          soleil.canvas.style.top = c00rdY * 1.1 + 60 + "%"
          soleil.canvas.style.left = c00rdX * 1.3 - 50 + "%"
          soleil.ctx.clearRect(0, 0, 40, 40)
          lune.ctx.clearRect(0, 0, 40, 40)
          switch (c00rdX) {
            case 30:
              $("#space").fadeOut(3000)
              break
            case 40:
              $("#moon").fadeOut(3000)
              break
            case 52:
              monkey.monkeyDown()
              for (var i = 0; i < tabSonic.length; ++i)
                cancelAnimationFrame(tabSonic[i].idSennuie)
              for (i = 0; i < tabSonic.length; ++i) tabSonic[i].sonicMarche()
              for (i = 0; i < tabSonic.length; ++i) tabSonic[i].sonicSeDeplace()
              //snowBack.play()
              break
            case 62:
              cancelAnimationFrame(monkey.idMD)
              monkey.monkeyUp()
              break
            case 78:
              cancelAnimationFrame(monkey.idMU)
              monkey.monkeyDown()
              break
            case 90:
              cancelAnimationFrame(monkey.idMD)
              monkey.monkeyUp()
              break
            case 95:
              for (i = 0; i < tabSonic.length; ++i)
                cancelAnimationFrame(tabSonic[i].idmarche)
              for (i = 0; i < tabSonic.length; ++i)
                cancelAnimationFrame(tabSonic[i].idSeDeplace)
              for (i = 0; i < tabSonic.length; ++i) tabSonic[i].sonicSennuie()
              break
            case 100:
              $("#moon").fadeIn(3000)
              cancelAnimationFrame(monkey.idMU)
              //snowBack.pause()
              break
            case 105:
              $("#space").fadeIn(3000)
              break
            default:
          }
          soleil.ctx.fillRect(0, 0, 40, 40)
          lune.ctx.fillRect(0, 0, 40, 40)
          c00rdX = (c00rdX * 10 + 0.1 * 10) / 10
        } else {
          c00rdX = 20
        }
      }
    }
    dessinerM0n()
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
