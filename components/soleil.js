import React, { Component } from 'react'
import $ from 'jquery'
import styles from './soleil.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

class soleil extends Component {
  monIntro() {
    //ELEMENTS HTML---------------------------------------------------------------
    //DIV SOLEILLLLLLLLL
    var m0nsoleil = document.getElementById('s0leil')
    m0nsoleil.style.position = 'relative'
    m0nsoleil.style.display = 'block'
    m0nsoleil.style.overflow = 'hidden'
    m0nsoleil.width = 600
    m0nsoleil.height = 300
    m0nsoleil.style.height = '300px'
    m0nsoleil.id = 's0leil'
    //360backnoreverse
    var mon360 = document.createElement('video')
    mon360.style.position = 'absolute'
    mon360.style.top = '7%'
    mon360.style.right = '34%'
    mon360.style.width = '38%'
    mon360.id = 'snowB'
    mon360.playsinline = true
    mon360.autoplay = true
    mon360.muted = true
    mon360.loop = true
    var src360 = document.createElement('source')
    src360.src = '/img/360backnoreverse.mp4'
    src360.type = 'video/mp4'
    //ATARIIIIIIIIII
    var divAtari = document.createElement('div')
    divAtari.style.position = 'absolute'
    divAtari.style.top = '55px'
    divAtari.style.right = '10px'
    divAtari.id = 'atari'
    var m0nimg = document.createElement('img')
    m0nimg.style.position = 'relative'
    m0nimg.src = '/img/Atari.png'
    //Cielllllllllllll
    var m0nCiel = document.createElement('canvas')
    m0nCiel.style.position = 'absolute'
    m0nCiel.style.display = 'block'
    m0nCiel.width = 600
    m0nCiel.height = 400
    m0nCiel.style.margin = 0
    m0nCiel.style.width = '100%'
    m0nCiel.style.height = '100%'
    m0nCiel.style.backgroundColor = 'blue'
    m0nCiel.id = 'ci3l'
    m0nsoleil.appendChild(m0nCiel)
    //space
    var cielNuit = document.createElement('canvas')
    cielNuit.width = 600
    cielNuit.height = 400
    cielNuit.style.width = '100%'
    cielNuit.style.height = '100%'
    cielNuit.id = 'space'
    cielNuit.style.position = 'absolute'
    cielNuit.style.borderRadius = '10px'
    cielNuit.style.top = '0px'
    cielNuit.style.left = '0px'
    cielNuit.style.backgroundColor = 'black'
    m0nsoleil.appendChild(cielNuit)
    //soleil
    var m0nCanva = document.createElement('canvas')
    m0nCanva.width = 40
    m0nCanva.height = 40
    m0nCanva.style.width = '40px'
    m0nCanva.id = 'c4nv4'
    m0nCanva.style.position = 'absolute'
    m0nsoleil.appendChild(m0nCanva)
    //Lune
    var maLune = document.createElement('canvas')
    maLune.width = 40
    maLune.height = 40
    maLune.style.width = '50px'
    maLune.id = 'moon'
    maLune.style.position = 'absolute'
    maLune.style.top = '30px'
    maLune.style.right = '10%'
    m0nsoleil.appendChild(maLune)
    //cloud img
    var imgCloud = document.createElement('img')
    imgCloud.id = 'cloud'
    imgCloud.className = 'cloud'
    imgCloud.style.position = 'absolute'
    imgCloud.style.left = '600px'
    imgCloud.style.top = '-460px'
    imgCloud.style.height = '200%'
    imgCloud.src = '/img/cloud.png'
    m0nsoleil.appendChild(imgCloud)
    //mer
    var m4m3r = document.createElement('canvas')
    m4m3r.width = 600
    m4m3r.height = 400
    m4m3r.style.width = '100%'
    m4m3r.style.height = '100%'
    m4m3r.style.top = '50px'
    m4m3r.id = 'm0nC4nvaM3r'
    m4m3r.style.position = 'absolute'
    m4m3r.style.display = 'block'
    m0nsoleil.appendChild(m4m3r)
    //colline
    var m4colline = document.createElement('canvas')
    m4colline.width = 600
    m4colline.height = 400
    m4colline.style.width = '100%'
    m4colline.style.height = '100%'
    m4colline.id = 'm0nC4nvaC0lline'
    m4colline.style.display = 'block'
    m4colline.style.position = 'absolute'
    m4colline.style.top = '45px'
    m0nsoleil.appendChild(m4colline)

    //STYLE des éléments HTML---------------------------------------------------------
    //mer
    var mer = m4m3r.getContext('2d')
    var gradientm3r = mer.createLinearGradient(0, 0, 0, 600)
    gradientm3r.addColorStop(0, 'blue')
    gradientm3r.addColorStop(0.7, 'cyan')
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
    var colline = m4colline.getContext('2d')
    var gradientC0lline = colline.createLinearGradient(0, 0, 0, 600)
    gradientC0lline.addColorStop(0, 'yellow')
    gradientC0lline.addColorStop(0.8, 'black')
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
    var ctxLune = maLune.getContext('2d')
    var gradientLune = ctxLune.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradientLune.addColorStop(0, 'transparent')
    gradientLune.addColorStop(0.9, 'white')
    ctxLune.fillStyle = gradientLune

    //soleil
    var ctx = m0nCanva.getContext('2d')
    var gradient = ctx.createRadialGradient(16, 16, 16, 16, 16, 14)
    gradient.addColorStop(0, 'transparent')
    gradient.addColorStop(0.9, 'yellow')
    ctx.fillStyle = gradient


    //SONIC PALM TREE
    var divMonkey = document.createElement('div')
    divMonkey.id = 'divMonkey'
    divMonkey.className = 'divMonkey'
    divMonkey.style.position = 'absolute'
    divMonkey.style.height = '140px'
    divMonkey.style.width = '95px'
    divMonkey.style.top = '50px'
    divMonkey.style.left = '59.55px'
    divMonkey.style.overflow = 'hidden'
    var imgMonkey = document.createElement('img')
    imgMonkey.id = 'monkey'
    imgMonkey.className = 'monkey'
    imgMonkey.style.position = 'absolute'
    imgMonkey.style.height = '100%'
    imgMonkey.style.left = '-2215px'
    imgMonkey.src = '/img/monkey.png'
    //Palm Tree 
    var imgSonicPalm = document.createElement('img')
    imgSonicPalm.id = 'palmTree'
    imgSonicPalm.className = 'palmTree'
    imgSonicPalm.style.position = 'absolute'
    imgSonicPalm.style.height = '65%'
    imgSonicPalm.style.top = '30px'
    imgSonicPalm.style.left = '5px'
    imgSonicPalm.src = '/img/palmTree.png'

    //SONIC div
    var divSonic = document.createElement('div')
    divSonic.id = 'divSonic'
    divSonic.className = 'divsonic'
    divSonic.style.position = 'absolute'
    divSonic.style.height = '48px'
    divSonic.style.width = '48px'
    divSonic.style.top = '250px'
    divSonic.style.left = '-10%'
    divSonic.style.overflow = 'hidden'
    //SONIC img 2
    var imgSonic = document.createElement('img')
    imgSonic.id = 'sonic'
    imgSonic.className = 'sonic'
    imgSonic.style.position = 'relative'
    imgSonic.style.left = '-55px'
    imgSonic.style.top = '-21px'
    imgSonic.src = '/img/sonic2.png'

    //Ordre des calques
    m0nsoleil.appendChild(divMonkey)
    m0nsoleil.appendChild(imgSonicPalm)
    divMonkey.appendChild(imgMonkey)
    m0nsoleil.appendChild(divSonic)
    m0nsoleil.appendChild(divAtari)
    divAtari.appendChild(mon360)
    divAtari.appendChild(m0nimg)
    divSonic.appendChild(imgSonic)
    mon360.appendChild(src360)

    //initialisation des variables de travail des fonctions et des id des animations
    var bool1  = false
    var bool2  = false
    var idB, idW, idMU, idMD, idM/*, idBird, idCloud*/
    //let i = 4

    //Fonctions animations sprites/img-----------------------------------------------
    var moveCloud = function () {
      /*idCloud = */requestAnimationFrame(moveCloud)
      if (delta > interval) {
        //code for
        if (parseFloat(imgCloud.style.left) > -1050) {
          imgCloud.style.left = parseFloat(imgCloud.style.left) - 0.2 + 'px'
        }
        else {
          imgCloud.style.left = '700px'

        }
      }
    }

    var sonicBored = function () {
      idB = requestAnimationFrame(sonicBored)
      if (delta > interval) {
        //code for
        if (bool1 === false) {
          imgSonic.style.left = '-55px'
          imgSonic.style.top = '-21px'
          bool1 = true
        }
        else {
          if (parseFloat(imgSonic.style.left) > -200) {
            imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
          }
          else bool1 = false
        }
      }
    }

    var sonicWalk = function () {
      idW = requestAnimationFrame(sonicWalk)

      if (delta > interval) {
        //code for
        if (bool2 === false) {
          imgSonic.style.left = '-50px'
          imgSonic.style.top = '-95px'
          bool2 = true
        }
        else {
          if (parseFloat(imgSonic.style.left) > -200) {
            imgSonic.style.left = parseFloat(imgSonic.style.left) - 49 + 'px'
          }
          else bool2 = false
        }
      }
    }

    var moveSonicRight = function () {
      idM = requestAnimationFrame(moveSonicRight)

      if (delta > interval) {
        //code for
        if (parseFloat(divSonic.style.left) < 100) {
          divSonic.style.left = parseFloat(divSonic.style.left) + 0.2 + '%'
        }
        else {
          divSonic.style.left = '-10%'
        }
      }
    }

    var back = false
    var cpt = 0
    var monkeyDown = () => {
      idMD = requestAnimationFrame(monkeyDown)
      if (delta > interval) {
        //code for
        if (parseFloat(imgMonkey.style.left) <= 0 && !back) {
          imgMonkey.style.left = parseFloat(imgMonkey.style.left) + 105.52 + 'px'
          cpt++
        }
        else {
          back = true
        }
      }
    }

    var monkeyUp = function () {
      idMU = requestAnimationFrame(monkeyUp)
      if (delta > interval) {
        //code for
        if (cpt > 0) {
          imgMonkey.style.left = parseFloat(imgMonkey.style.left) - 105.52 + 'px'
          cpt--
        }
        else {
          back = false

        }
      }
    }

    //INITIALISATION ENVIRONNEMENT----------------------------------------------------
    //coordonnées soleil
    var c00rdX = 20
    var c00rdY = 2
    moveCloud()
    $('#space').animate({
      backgroundColor: '#000000'
    }, 1000)
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
          m0nCanva.style.top = c00rdY * 1.1 + 60 + '%'
          m0nCanva.style.left = c00rdX * 1.3 - 50 + '%'
          ctx.clearRect(0, 0, 40, 40)
          ctxLune.clearRect(0, 0, 40, 40)
          switch (c00rdX) {
            case 30:
              $('#space').fadeOut(3000)
              break
            case 40:
              $('#moon').fadeOut(3000)
              cancelAnimationFrame(idW)
              cancelAnimationFrame(idM)
              break
            case 52:
              idMD = monkeyDown()
              cancelAnimationFrame(idB)
              sonicWalk()
              moveSonicRight()
              //snowBack.play()
              break
            case 62:
              cancelAnimationFrame(idMD)
              monkeyUp()
              break
            case 78:
              cancelAnimationFrame(idMU)
              monkeyDown()
              break
            case 90:
              cancelAnimationFrame(idMD)
              monkeyUp()
              break
            case 95:
              cancelAnimationFrame(idM)
              cancelAnimationFrame(idW)
              sonicBored()
              break
            case 100:
              $('#moon').fadeIn(3000)
              cancelAnimationFrame(idMU)
              //snowBack.pause()
              break
            case 105:
              $('#space').fadeIn(3000)
              break
            default:
          }
          ctx.fillRect(0, 0, 40, 40)
          ctxLune.fillRect(0, 0, 40, 40)
          c00rdX = (c00rdX * 10 + 0.1 * 10) / 10
        }
        else {
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