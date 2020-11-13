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
        this.top = this.div.style.top = 250 + "px"
        //Math.floor(Math.random() * Math.floor(70)) + 180 + "px"
        this.gauche = this.div.style.left = "-10%"
        //Math.floor(Math.random() * Math.floor(30)) + "%"
        this.div.style.overflow = "hidden"
        //sprite
        this.image = document.createElement("img")
        this.image.className = "sonic"
        this.image.style.position = "relative"
        this.image.style.left = "-55px"
        this.image.style.top = "-21px"
        this.image.src = "/img/sonic2.png"
        this.div.appendChild(this.image)
        m0nsoleil.appendChild(this.div)
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
        m0nsoleil.appendChild(this.div)
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

        m0nsoleil.appendChild(this.div)
        m0nsoleil.appendChild(this.imgPalm)
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

    //ELEMENTS HTML générés en vanilla JS---------------------------------------------------------------
    //DIV SOLEILLLLLLLLL
    var m0nsoleil = document.getElementById("s0leil")
    m0nsoleil.style.position = "relative"
    m0nsoleil.style.display = "block"
    m0nsoleil.style.overflow = "hidden"
    m0nsoleil.style.height = "300px"

    //Cielllllllllllll
    var m0nCiel = document.createElement("canvas")
    m0nCiel.style.position = "absolute"
    m0nCiel.style.display = "block"
    m0nCiel.width = 600
    m0nCiel.height = 400
    m0nCiel.style.width = "100%"
    m0nCiel.style.height = "100%"
    m0nCiel.style.margin = 0
    m0nCiel.style.backgroundColor = "blue"
    m0nCiel.id = "ci3l"
    //space
    var cielNuit = document.createElement("canvas")
    cielNuit.width = 600
    cielNuit.height = 400
    cielNuit.style.width = "100%"
    cielNuit.style.height = "100%"
    cielNuit.id = "space"
    cielNuit.style.position = "absolute"
    cielNuit.style.borderRadius = "10px"
    cielNuit.style.top = "0px"
    cielNuit.style.left = "0px"
    cielNuit.style.backgroundColor = "black"
    //soleil
    var m0nCanva = document.createElement("canvas")
    m0nCanva.width = 40
    m0nCanva.height = 40
    m0nCanva.id = "c4nv4"
    m0nCanva.style.width = "40px"
    m0nCanva.style.position = "absolute"
    //Lune
    var maLune = document.createElement("canvas")
    maLune.width = 40
    maLune.height = 40
    maLune.style.width = "50px"
    maLune.id = "moon"
    maLune.style.position = "absolute"
    maLune.style.top = "30px"
    maLune.style.right = "10%"
    //cloud img
    var imgCloud = document.createElement("img")
    imgCloud.id = "cloud"
    imgCloud.className = "cloud"
    imgCloud.style.position = "absolute"
    imgCloud.style.left = "600px"
    imgCloud.style.top = "-460px"
    imgCloud.style.height = "200%"
    imgCloud.src = "/img/cloud.png"
    //mer
    var m4m3r = document.createElement("canvas")
    m4m3r.width = 600
    m4m3r.height = 400
    m4m3r.style.width = "100%"
    m4m3r.style.height = "100%"
    m4m3r.style.top = "50px"
    m4m3r.id = "m0nC4nvaM3r"
    m4m3r.style.position = "absolute"
    m4m3r.style.display = "block"
    //colline
    var m4colline = document.createElement("canvas")
    m4colline.width = 600
    m4colline.height = 400
    m4colline.style.width = "100%"
    m4colline.style.height = "100%"
    m4colline.id = "m0nC4nvaC0lline"
    m4colline.style.display = "block"
    m4colline.style.position = "absolute"
    m4colline.style.top = "45px"

    //CANVAS DRAW---------------------------------------------------------
    //mer
    var mer = m4m3r.getContext("2d")
    var gradientm3r = mer.createLinearGradient(0, 0, 0, 600)
    gradientm3r.addColorStop(0, "blue")
    gradientm3r.addColorStop(0.7, "cyan")
    mer.fillStyle = gradientm3r
    mer.beginPath()
    mer.moveTo(0, 600)
    mer.lineTo(600, 400)
    mer.lineTo(600, 170)
    mer.bezierCurveTo(170, 178, 650, 172, 0, 170)
    mer.closePath()
    mer.stroke()
    mer.fill()
    //Colline
    var colline = m4colline.getContext("2d")
    var gradientC0lline = colline.createLinearGradient(0, 0, 0, 600)
    gradientC0lline.addColorStop(0, "yellow")
    gradientC0lline.addColorStop(0.8, "black")
    colline.fillStyle = gradientC0lline
    colline.beginPath()
    colline.moveTo(0, 400)
    colline.lineTo(600, 400)
    colline.lineTo(600, 260)
    colline.bezierCurveTo(150, 150, 250, 130, 0, 200)
    colline.closePath()
    colline.stroke()
    colline.fill()
    //lune
    var ctxLune = maLune.getContext("2d")
    var gradientLune = ctxLune.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradientLune.addColorStop(0, "transparent")
    gradientLune.addColorStop(0.9, "white")
    ctxLune.fillStyle = gradientLune
    //soleil
    var ctx = m0nCanva.getContext("2d")
    var gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradient.addColorStop(0, "transparent")
    gradient.addColorStop(0.9, "yellow")
    ctx.fillStyle = gradient

    //Ordre des calques
    m0nsoleil.appendChild(m0nCiel)
    m0nsoleil.appendChild(cielNuit)
    m0nsoleil.appendChild(m0nCanva)
    m0nsoleil.appendChild(maLune)
    m0nsoleil.appendChild(imgCloud)
    m0nsoleil.appendChild(m4m3r)
    m0nsoleil.appendChild(m4colline)
    //Instanciation Palm Tree
    var cpt = 0,
      back = false
    const monkey = new Monkey()
    //Instanciation Sonic
    const tabSonic = []
    for (let i = 0; i <= 1; ++i) tabSonic[i] = new Sonic()
    //Instanciation Atari
    const atari = new Atari()

    //Fonctions animations sprites/img-----------------------------------------------
    var moveCloud = function () {
      /*idCloud = */ requestAnimationFrame(moveCloud)
      if (delta > interval) {
        //code for
        if (parseFloat(imgCloud.style.left) > -1050) {
          imgCloud.style.left = parseFloat(imgCloud.style.left) - 0.2 + "px"
        } else {
          imgCloud.style.left = "700px"
        }
      }
    }

    //INITIALISATION ENVIRONNEMENT----------------------------------------------------
    //coordonnées soleil
    var c00rdX = 20
    var c00rdY = 2
    moveCloud()
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
          m0nCanva.style.top = c00rdY * 1.1 + 60 + "%"
          m0nCanva.style.left = c00rdX * 1.3 - 50 + "%"
          ctx.clearRect(0, 0, 40, 40)
          ctxLune.clearRect(0, 0, 40, 40)
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
          ctx.fillRect(0, 0, 40, 40)
          ctxLune.fillRect(0, 0, 40, 40)
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
