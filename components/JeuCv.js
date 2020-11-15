/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react"
import uk from "../public/img/uk.svg"
import fr from "../public/img/france.svg"
import $ from "jquery"
import styles from "./JeuCv.module.scss"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

class JeuCv extends Component {
  constructor(props) {
    super(props)
  }
  jeuBreaker() {
    //FPS control
    var fps = 60,
      now,
      then = Date.now(),
      interval = 1000 / fps,
      delta
    //Sections du cv
    $("#scoreForm").hide()
    $("#highScore").hide()
    $("#competen").fadeIn(500)
    $("#experiences").fadeIn(375)
    $("#formation").fadeIn(250)
    $("#complementaire").fadeIn(125)
    $(".moi").fadeIn()
    $(".metier").fadeIn()
    $("#metier > h2").fadeOut(375, function () {
      $(this).text("Click or Touch here to START").fadeIn(375)
    })
    var $div2blink = $("#metier") // Save reference, only look this item up once, then save
    var idInterBlink = setInterval(function () {
      $div2blink.toggleClass("blink")
    }, 700)

    //_______________________________Choix_langue____________________________________________________________________________
    window.document.getElementById("french").onclick = () => {
      $(".english").hide()
      $(".spanish").hide()
      $(".french").hide()
      $(".french").fadeIn()
    }
    window.document.getElementById("english").onclick = () => {
      $(".french").hide()
      $(".spanish").hide()
      $(".english").hide()
      $(".english").fadeIn()
    }

    //_____________________________Click_on_START__________________________________________________________________________
    var bStart = window.document.getElementById("metier")
    bStart.addEventListener("click", varsStart, true)

    function varsStart() {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      const context = new AudioContext()
      var audioStack
      var pongA = "/sound/pongA.mp3"
      var pongB = "/sound/pongB.mp3"
      var pongC = "/sound/pongC.mp3"
      var start = "/sound/start.mp3"
      play(start)
      var youWin = "/sound/youWin.mp3"
      var miss = "/sound/miss.mp3"
      var score = 0
      var combo = 1
      var clickMove = false
      $("#scoreForm").hide()
      $("#highScore").hide()

      //____________________INITIALISATION ENVIRONNEMENT________________________________________________________________
      var competences = window.document.getElementById("competen")
      $("#competen").toggleClass(styles.competencesT)
      var informatique = window.document.getElementById("informatique")
      var commerciales = window.document.getElementById("commerciales")
      //var raquette.div = window.document.getElementById("linkedIn")
      clearInterval(idInterBlink)
      $div2blink.removeClass("blink")
      $div2blink.css("background-color", "rgba(255, 255, 255, 0.4)")
      $("#metier > h2")
        .text("SCORE: " + score)
        .css({
          color: "black",
          "font-family": "sans-serif",
          "font-size": "1.5em",
        })
        .fadeIn(375)

      class Ball {
        constructor() {
          this.ballX = 0
          this.ballY = 0
          this.ballLeft = false
          this.ballDown = false
          this.angle = 1
          this.div = document.createElement("div")
          this.div.style.left = this.ballX + "px"
          this.div.style.top = this.ballY + "px"
          this.div.id = "divSprite"
          this.div.className = "divsprite"
          this.div.style.position = "absolute"
          this.div.style.height = "25px"
          this.div.style.width = "25px"
          //this.div.style.border = "1px solid #ffffff"
          this.div.style.borderRadius = "12.5px"
          this.div.style.overflow = "hidden"
          competences.appendChild(this.div)
          this.image = document.createElement("img")
          this.image.id = "imgSoccer"
          this.image.className = "imgsoccer"
          this.image.style.position = "absolute"
          this.image.style.height = "100px"
          this.image.style.left = "-13px"
          this.image.style.top = -18 + "px"
          this.image.style.top = "-px"
          this.image.src = "/img/soccerBall.png"
          this.image.style.backgroundColor = "none"
          this.div.appendChild(this.image)
        }
        animSprite() {
          this.idSprite = requestAnimationFrame(this.animSprite.bind(this))
          //FPS control
          if (delta > interval * 1.2) {
            //code to animate
            if (parseFloat(this.image.style.left) > -72) {
              this.image.style.left =
                parseFloat(this.image.style.left) - 39 + "px"
            } else if (parseFloat(this.image.style.top) > -50) {
              this.image.style.left = -13 + "px"
              this.image.style.top =
                parseFloat(this.image.style.top) - 40 + "px"
            } else {
              this.image.style.left = -13 + "px"
              this.image.style.top = -18 + "px"
            }
          }
        }
      }

      class Paddle {
        constructor() {
          this.div = document.createElement("div")
          this.div.id = "linkedIn"
          this.div.style.display = "none"
          this.div.style.border = "2px solid #ffffff"
          this.div.style.position = "absolute"
          this.div.style.borderRadius = "10px"
          this.div.style.height = "25px"
          this.div.style.width = "85px"
          this.div.style.margin = "5px"
          this.div.style.backgroundColor = "black"
          this.div.style.left =
            competences.offsetWidth / 2 + competences.offsetLeft + "px"
          this.div.style.top =
            competences.offsetTop + competences.offsetHeight - 120 + "px"
          competences.appendChild(this.div)
        }
      }

      const ball = new Ball()
      const raquette = new Paddle()
      var idAni
      //________________________________________DIV FOOTBALL SPRITE_____________________________________________
      //var ball.div = window.document.createElement("div")

      //________________________________________footBall Sprite_________________________________________________
      //var ball.image = window.document.createElement("img")

      //________________________________________Paddle + hauteur breaker_____________________________________
      $("#linkedIn").fadeIn(2000)

      //________________________________________INITIALISTATION BRICKS_______________________________________
      var mesDivInfos = window.document.getElementsByClassName(styles.infoJeu)
      var i = mesDivInfos.length
      i--
      while (i >= 0) {
        mesDivInfos[i].setAttribute("class", styles.infoT)
        i--
      }
      //_________________________________________INITIALISATIION_JEU______________________________________
      informatique.style.verticalAlign = "top"
      commerciales.style.verticalAlign = "top"
      $("html, body").animate(
        {
          scrollTop: $("#metier").offset().top - 80,
        },
        750
      )
      $("#btp").fadeOut()
      $("#commerciales").fadeOut()
      $("#informatique").animate(
        {
          width: "97%",
        },
        1000
      )
      ball.ballX =
        raquette.div.offsetLeft +
        raquette.div.offsetWidth / 2 -
        ball.div.offsetWidth / 2
      ball.ballY = raquette.div.offsetTop - ball.div.offsetHeight
      ball.div.style.left = ball.ballX + "px"
      ball.div.style.top = ball.ballY + "px"
      var youwin = false

      //__________________________________________WEB_Audio_API___________________________________________________________
      function play(url) {
        audioStack = []
        var nextTime = 0
        fetch(url).then(function (response) {
          var reader = response.body.getReader()
          function read() {
            return reader.read().then(({ value, done }) => {
              if (done) {
                //console.log('done');
                return
              } else {
                //console.log(value, done);
                context.decodeAudioData(
                  value.buffer,
                  function (buffer) {
                    audioStack.push(buffer)
                    if (audioStack.length) {
                      scheduleBuffers()
                    }
                  },
                  function (err) {
                    console.log("err(decodeAudioData): " + err)
                  }
                )
              }
              read()
            })
          }
          read()
        })

        function scheduleBuffers() {
          while (audioStack.length) {
            var buffer = audioStack.shift()
            var source = context.createBufferSource()
            source.buffer = buffer
            source.connect(context.destination)
            if (nextTime === 0) nextTime = context.currentTime + 0.01 /// add 50ms latency to work well across systems - tune this if you like
            source.start(nextTime)
            nextTime += source.buffer.duration // Make the next buffer wait the length of the last buffer before being played
          }
        }
      }

      //__________________________________DEPLACEMENT PADDLE RAQUETTE_________________________________
      //____________________________________TouchMove_eventListener___________________________________
      var box2 = document.getElementById("linkedIn"),
        boxleft,
        startx,
        touchobj = null // Touch object holder
      var eTouchStart = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point
        boxleft = parseInt(box2.style.left) // get left position of box
        startx = parseInt(touchobj.pageX) // get x coord of touch point
        e.preventDefault() // prevent default click behavior
      }
      var eTouchMove = function (e) {
        touchobj = e.changedTouches[0] // reference first touch point for this event
        var dist = parseInt(touchobj.pageX) - startx // calculate dist traveled by touch point
        box2.style.left =
          boxleft + dist >
          competences.offsetLeft +
            competences.offsetWidth -
            raquette.div.offsetWidth
            ? competences.offsetLeft +
              competences.offsetWidth -
              raquette.div.offsetWidth -
              5 +
              "px"
            : boxleft + dist < competences.offsetLeft
            ? competences.offsetLeft - 5 + "px"
            : boxleft + dist - 5 + "px"
        if (clickMove === true) {
          ball.ballX =
            raquette.div.offsetLeft +
            raquette.div.offsetWidth / 2 -
            ball.div.offsetWidth / 2
          ball.ballY = raquette.div.offsetTop - ball.div.offsetHeight
          ball.div.style.left = ball.ballX + "px"
          ball.div.style.top = ball.ballY + "px"
        }
      }

      window.document.addEventListener("touchstart", eTouchStart, true)
      window.document.addEventListener("touchmove", eTouchMove, true)
      bStart.removeEventListener("click", varsStart, true)

      //__________________________________Mouse Move EVENT___________________________________________
      var divNext = window.document.getElementById("__next")

      var movepaddle = function (mon0bjetEvent) {
        if (
          mon0bjetEvent.clientX - raquette.div.offsetWidth / 2 - 5 >
            (divNext.offsetWidth - competences.offsetWidth) / 2 +
              competences.offsetLeft &&
          mon0bjetEvent.clientX + raquette.div.offsetWidth / 2 <
            (divNext.offsetWidth - competences.offsetWidth) / 2 +
              competences.offsetWidth +
              5
        ) {
          raquette.div.style.left =
            mon0bjetEvent.clientX -
            raquette.div.offsetWidth / 2 -
            5 -
            (divNext.offsetWidth - competences.offsetWidth) / 2 +
            "px"
        } else if (
          mon0bjetEvent.clientX - raquette.div.offsetWidth / 2 <
          (divNext.offsetWidth - competences.offsetWidth) / 2 +
            competences.offsetLeft
        ) {
          raquette.div.style.left = competences.offsetLeft - 5 + "px"
        } else if (
          mon0bjetEvent.clientX + raquette.div.offsetWidth / 2 >
          competences.offsetWidth + competences.offsetLeft
        ) {
          raquette.div.style.left =
            competences.offsetLeft +
            competences.offsetWidth -
            raquette.div.offsetWidth -
            5 +
            "px"
        }
        if (clickMove === true) {
          ball.ballX =
            raquette.div.offsetLeft +
            raquette.div.offsetWidth / 2 -
            ball.div.offsetWidth / 2
          ball.ballY = raquette.div.offsetTop - ball.div.offsetHeight
          ball.div.style.left = ball.ballX + "px"
          ball.div.style.top = ball.ballY + "px"
        }
      }
      window.document.addEventListener("mousemove", movepaddle, true)

      //gestion reprise jeu après click
      var animMoveBall = function () {
        clickMove = false
        ball.animSprite()
        window.document.removeEventListener("click", animMoveBall, true)
        bouclePrincpale()
      }

      //__________________________________Intéraction_balle/paddle_AngleBalle_______________________________________________________
      var paddle = function () {
        //Left paddle side
        if (
          ball.ballX + ball.div.offsetWidth / 2 > raquette.div.offsetLeft &&
          ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth / 2
        ) {
          ball.ballDown = false
          ball.ballLeft = true
          combo += 1
          play(pongB)
          //angle renvoi balle
          if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth / 8
          ) {
            ball.angle = 4
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth / 4
          ) {
            ball.angle = 3
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft +
              raquette.div.offsetWidth / 4 +
              raquette.div.offsetWidth / 8
          ) {
            ball.angle = 2
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth / 2
          ) {
            ball.angle = 1
          }
        }
        //Right paddle side
        else if (
          ball.ballX + ball.div.offsetWidth / 2 > raquette.div.offsetLeft &&
          ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth
        ) {
          ball.ballDown = false
          ball.ballLeft = false
          combo += 1
          play(pongB)
          //angle renvoi balle
          if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + (raquette.div.offsetWidth * 5) / 8
          ) {
            ball.angle = 1
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + (raquette.div.offsetWidth * 6) / 8
          ) {
            ball.angle = 2
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + (raquette.div.offsetWidth * 7) / 8
          ) {
            ball.angle = 3
          } else if (
            ball.ballX + ball.div.offsetWidth / 2 <
            raquette.div.offsetLeft + raquette.div.offsetWidth
          ) {
            ball.angle = 4
          }
        }
      }

      //___________________________________Verif/gestion_collision_brick_______________________________________________________________________________________
      var brickBroken = function () {
        var mesInfosT = window.document.getElementsByClassName(styles.infoT)
        var i = mesInfosT.length - 1
        let gauche, droite, haut, bas, mini
        while (i >= 0) {
          //inside brick
          if (
            ball.ballX + ball.div.offsetWidth > mesInfosT[i].offsetLeft && //left
            ball.ballX < mesInfosT[i].offsetLeft + mesInfosT[i].offsetWidth && //right
            ball.ballY + ball.div.offsetHeight > mesInfosT[i].offsetTop && //haut
            ball.ballY < mesInfosT[i].offsetTop + mesInfosT[i].offsetHeight //bas
          ) {
            gauche = Math.abs(
              ball.ballX + ball.div.offsetWidth - mesInfosT[i].offsetLeft
            )
            droite = Math.abs(
              ball.ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth
            )
            haut = Math.abs(
              ball.ballY + ball.div.offsetHeight - mesInfosT[i].offsetTop
            )
            bas = Math.abs(
              ball.ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight
            )
            mini = Math.min(gauche, droite, haut, bas)

            switch (mini) {
              case gauche:
                ball.ballLeft = true
                destroyBrick(i)
                break
              case droite:
                ball.ballLeft = false
                destroyBrick(i)
                break
              case haut:
                ball.ballDown = false
                destroyBrick(i)
                break
              case bas:
                ball.ballDown = true
                destroyBrick(i)
                break
              default:
            }
          }
          i--
        }
      }

      var destroyBrick = function (i) {
        var mesInfosT = window.document.getElementsByClassName(styles.infoT)
        play(pongC)
        $(mesInfosT[i]).animate(
          {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
          },
          500
        )
        mesInfosT[i].className = styles.infoJeu
        score += 50 * combo
      }

      var deplacerBalle = function () {
        var ballSpeed = 2
        ball.div.style.top = ball.ballY + "px"
        //ball move left right limit
        if (
          ball.ballX <
            competences.offsetLeft +
              competences.offsetWidth -
              ball.div.offsetWidth &&
          !ball.ballLeft
        ) {
          ball.ballX = ball.ballX + ball.angle * ballSpeed
          ball.div.style.left = ball.ballX + "px"
        } else if (ball.ballX > competences.offsetLeft) {
          ball.ballLeft = true
          ball.ballX = ball.ballX - ball.angle * ballSpeed
          ball.div.style.left = ball.ballX + "px"
        } else {
          ball.ballLeft = false
          play(pongA)
        }
        //ball move up down limit
        if (ball.ballY >= competences.offsetTop && !ball.ballDown) {
          ball.ballY = ball.ballY - 2 * ballSpeed
          ball.div.style.top = ball.ballY + "px"
        } else if (
          ball.ballY <
          competences.offsetTop + competences.offsetHeight - 30
        ) {
          ball.ballDown = true
          ball.ballY = ball.ballY + 2 * ballSpeed
          ball.div.style.top = ball.ballY + "px"
          if (
            ball.ballY + ball.div.offsetHeight > raquette.div.offsetTop - 5 &&
            ball.ballY < raquette.div.offsetTop
          )
            paddle()
        } else {
          //YOU MISSSSS
          ball.ballDown = false
          clickMove = true
          combo = 1
          //------------Short hand style if---------------
          score >= 100 ? (score -= 100) : (score = 0)
          //----------------------------------------------
          $("#metier > h2")
            .text("SCORE: " + score)
            .css({
              color: "red",
              "font-family": "sans-serif",
              "font-size": "1.5em",
            })
            .fadeIn(375)
          combo = 1
          cancelAnimationFrame(ball.idSprite)
          play(miss)
          ball.ballX =
            raquette.div.offsetLeft +
            raquette.div.offsetWidth / 2 -
            ball.div.offsetWidth / 2
          ball.ballY = raquette.div.offsetTop - ball.div.offsetHeight
          ball.div.style.left = ball.ballX + "px"
          ball.div.style.top = ball.ballY + "px"
          ball.ballLeft = false
          ball.angle = 1
        }
        if (
          ball.ballX + ball.div.offsetWidth >
          competences.offsetLeft + competences.offsetWidth
        ) {
          play(pongA)
        }
        if (ball.ballY < competences.offsetTop) {
          play(pongA)
        }
      }

      //________________________________________________Verif/Gestion_YouWIN______________________________________________________________________________
      function jeuTermine() {
        var mesInfosT = window.document.getElementsByClassName(styles.infoT)
        //YOU WIN
        if (!mesInfosT.length && fuse === 1) {
          fuse--
          stopEvent = true
          play(youWin)
          raquette.div.style.left = "auto"
          ball.ballY = raquette.div.offsetTop
          raquette.div.className = "linkedin"
          $("#linkedIn").hide()
          $("#imgSoccer").hide()
          $("#competen").toggleClass(styles.competen)
          informatique.style.verticalAlign = "middle"
          commerciales.style.verticalAlign = "middle"
          youwin = true
          $("#skills").hide()
          $("#score").fadeIn()
          $("#informatique").animate(
            {
              width: "99%",
            },
            1000
          )
          $("#competen").css("height", "auto")
          $("#competen").fadeOut()
          $("#highScore").fadeIn()
          $("#scoreForm").fadeIn()
          //Requete AJAX SELECT pour affichage tableau score
          $.ajax({
            type: "GET",
            url: "/api/highscore",
            dataType: "json",
            success: function (reponse) {
              console.log("GET success: " + reponse)
              var tbodyEl = $("tbody")
              tbodyEl.html("")
              reponse.forEach(function (score) {
                tbodyEl.append(
                  `<tr><td>${score.visitorName}</td><td>${score.score}</td></tr>`
                )
              })
            },
          })
          $("#highScore").fadeIn()
        }
      }

      //requete AJAX submit score
      $("#boutton").on("click", function (event) {
        event.preventDefault()
        console.log($("#postName").val() + "/" + score)
        $("#scoreForm").hide()
        $.ajax({
          type: "POST",
          url: "/api/highscore",
          dataType: "json",
          data: {
            visitorName: $("#postName").val(),
            score: score,
          },
          success: function (response) {
            console.log("POST success: " + response)
            $.ajax({
              type: "GET",
              url: "/api/highscore",
              dataType: "json",
              success: function (reponse) {
                console.log("GET success: " + reponse)
                var tbodyEl = $("tbody")
                tbodyEl.html("")
                reponse.forEach(function (score) {
                  tbodyEl.append(
                    `<tr><td>${score.visitorName}</td><td>${score.score}</td></tr>`
                  )
                })
              },
            })
          },
        })
      })

      //_____________________MAIN()_____Déplacement_balle_dans_Environnement__________________________
      let fuse = 1
      var stopEvent = false
      clickMove = true
      var bouclePrincpale = function () {
        idAni = requestAnimationFrame(bouclePrincpale)
        //fps control
        now = Date.now()
        delta = now - then
        if (delta > interval) {
          then = now - (delta % interval)
          //code for drawing the frame
          if (!youwin || !clickMove) {
            deplacerBalle()
            brickBroken()
            $("#metier > h2")
              .text("SCORE: " + score)
              .fadeIn()
            jeuTermine()
            if (clickMove === false && fuse === 1) {
              $("#metier > h2")
                .text("SCORE: " + score)
                .css({
                  color: "black",
                  "font-family": "sans-serif",
                  "font-size": "1.5em",
                })
                .fadeIn(375)
            } else {
              cancelAnimationFrame(idAni)
              window.document.addEventListener("click", animMoveBall, true)
            }

            if (stopEvent) {
              window.document.removeEventListener("click", animMoveBall, true)
              window.document.removeEventListener("mousemove", movepaddle, true)
              window.document.removeEventListener("click", eTouchStart, true)
              window.document.removeEventListener("click", eTouchMove, true)
            }
          }
        }
      }
      bouclePrincpale()
    }
  }
  componentDidMount() {
    this.jeuBreaker()
  }
  render() {
    const metier = "IBM NODEJS DEVELOPER"
    return (
      <Container>
        <Row>
          <Col>
            <div id="metier" onClick={this.varsStart}>
              <h2 className={styles.titreh2}>{metier}</h2>
            </div>
            <div className="col-sm12 text-center">
              <img
                id="english"
                className={styles.imgFlag}
                src={uk}
                alt="English"
                height="30"
              />
              <img
                id="french"
                className={styles.imgFlag}
                src={fr}
                alt="Français"
                height="30"
              />
            </div>
            {/* <button onClick={this.finJeu}>YOUWON</button>*/}
            <div className={styles.competen} id="competen">
              <h2 className={`${styles.titreh2} french`}>Competences</h2>
              <h2 className={`${styles.titreh2} english`}>Skills</h2>
              <h2 className={`${styles.titreh2} spanish`}>Competencias</h2>
              <div className={styles.informatiquesCont} id="informatique">
                <h3 className={styles.titreh3}>Front End</h3>
                <div className={styles.informatiques}>
                  <div className={styles.infoJeu}>ReactJS</div>
                  <div className={styles.infoJeu}>HTML5</div>
                  <div className={styles.infoJeu}>Bootstrap</div>
                  <div className={styles.infoJeu}>Jquery</div>
                  <div className={styles.infoJeu}>CLP</div>
                  <div className={styles.infoJeu}>ES6</div>
                  <div className={styles.infoJeu}>jade/PUG</div>
                  <div className={styles.infoJeu}>SCSS</div>
                  <div className={styles.infoJeu}>DOM</div>
                </div>
                <h3 className={styles.titreh3}>Back End</h3>
                <div className={styles.informatiques}>
                  <div className={styles.infoJeu}>IBM i</div>
                  <div className={styles.infoJeu}>IBM RPG</div>
                  <div className={styles.infoJeu}>IBM db2</div>
                  <div className={styles.infoJeu}>NodeJS</div>
                  <div className={styles.infoJeu}>ExpressJS</div>
                  <div className={styles.infoJeu}>NextJS</div>
                  <div className={styles.infoJeu}>MongoDB</div>
                  <div className={styles.infoJeu}>SQL</div>
                  <div className={styles.infoJeu}>Ajax</div>
                </div>
                <h3 className={styles.titreh3}>Tools</h3>
                <div className={styles.informatiquesLast}>
                  <div className={styles.infoJeu}>Git</div>
                  <div className={styles.infoJeu}>IBM RDi</div>
                  <div className={styles.infoJeu}>IBM ACS</div>
                  <div className={styles.infoJeu}>ARCAD for IBM i</div>
                  <div className={styles.infoJeu}>bsh/zsh</div>
                  <div className={styles.infoJeu}>Linux</div>
                  <div className={styles.infoJeu}>osX</div>
                  <div className={styles.infoJeu}>Photoshop</div>
                  <div className={styles.infoJeu}>Windows</div>
                </div>
              </div>
              <div className={styles.btp} id="btp">
                <h3 className={`${styles.titreh3} french`}>
                  Techniques Design
                </h3>
                <h3 className={`${styles.titreh3} english`}>Technics Design</h3>
                <h3 className={`${styles.titreh3} spanish`}>Técnicas diseño</h3>
                <div className={`${styles.info} french`}>
                  Réaliser l'étude technique d'un projet de construction et en
                  estimer le co&ucirc;t
                </div>
                <div className={`${styles.info} english`}>
                  Conduct the technical study of a construction project and
                  estimate the cost
                </div>
                <div className={`${styles.info} spanish`}>
                  Estudio técnico de un proyecto de construcción y estimación
                  del costo
                </div>
                <div className={`${styles.info} french`}>
                  Réaliser la représentation graphique d'une construction ou de
                  design intérieur (Autocad, ArchiCAD, VectorWorks, Artlantis)
                </div>
                <div className={`${styles.info} english`}>
                  Realize the graphic representation of a construction or
                  interior design (Autocad, ArchiCAD, VectorWorks, Artlantis)
                </div>
                <div className={`${styles.info} spanish`}>
                  Realización de representaciónes gráficas de construcción y de
                  diseño interiores (Autocad, ArchiCAD, VectorWorks, Artlantis)
                </div>
                <div className={`${styles.infolast} french`}>
                  Réaliser un dossier de détails d'exécutions de projet
                  (Autocad, VectorWorks)
                </div>
                <div className={`${styles.infolast} english`}>
                  Make a project execution details folder (Autocad, VectorWorks)
                </div>
                <div className={`${styles.infolast} spanish`}>
                  Creación de carpetas de detalles de ejecución de proyectos
                  (Autocad, VectorWorks)
                </div>
              </div>
              <div className={styles.commerciales} id="commerciales">
                <h3 className={styles.titreh3}>H to H</h3>
                <div className={`${styles.info} french`}>
                  Assistant régie au Palais des Festivals de Cannes en
                  productions télévisuelles
                </div>
                <div className={`${styles.info} english`}>
                  Show management at Palais des Festivals in Cannes and in
                  television productions company
                </div>
                <div className={`${styles.info} spanish`}>
                  Asistente de dirección en el Palais des Festivals de Cannes y
                  en oficina de producciones televisivas
                </div>
                <div className={`${styles.info} french`}>
                  Mener un entretien de négociations de produits ou de services
                </div>
                <div className={`${styles.info} english`}>
                  Commercial negotiation of products or services
                </div>
                <div className={`${styles.info} spanish`}>
                  Negociación de productos o servicios
                </div>
                <div className={`${styles.infolast} french`}>
                  Accueil, service et conseil commercial
                </div>
                <div className={`${styles.infolast} english`}>
                  Front-desk and commercial advicement
                </div>
                <div className={`${styles.infolast} spanish`}>
                  Recepción, servicio y asesoramiento comercial
                </div>
              </div>
            </div>
            <div id="highScore">
              <h2 className="titreh2">HIGH SCORE</h2>
              <div id="scoreForm" className="col-sm12 text-center">
                <Form>
                  <Form.Group>
                    <Form.Label> Enter your name</Form.Label>
                    <Form.Row>
                      <Col></Col>
                      <Col>
                        <Form.Control
                          id="postName"
                          type="text"
                          placeholder="Name"
                        />
                      </Col>
                      <Col></Col>
                    </Form.Row>
                  </Form.Group>
                  <Button variant="primary" type="submit" id="boutton">
                    Submit
                  </Button>
                </Form>
              </div>
              <table id="mesData">
                <thead>
                  <tr>
                    <th id="nomScore">Nom</th>
                    <th id="pointScore">Score</th>
                  </tr>
                </thead>
                <tbody>{/*each player in results*/}</tbody>
              </table>
            </div>
            <div className={styles.competen} id="experiences">
              <h2 className={`${styles.titreh2} french`}>Experiences</h2>
              <h2 className={`${styles.titreh2} english`}>Experiences</h2>
              <h2 className={`${styles.titreh2} spanish`}>
                Experiencia profesional
              </h2>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Developpeur logiciel IBM i
                </h3>
                <h3 className={`${styles.titreh3} english`}>IBM i developer</h3>
                <div className={`${styles.infojob} french`}>
                  Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II,
                  Arcad, Rdi)
                </div>
                <div className={`${styles.infojob} english`}>
                  IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
                </div>
                <div className={`${styles.infojob} spanish`}>
                  IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
                </div>
                <div className={styles.lieu}>
                  04/08/2019 =&gt; 17/07/2020: Pro A Pro, Montauban
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Ingenieur etude et developpement IBM i
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  IBM i software engineer
                </h3>
                <div className={`${styles.infojob} french`}>
                  Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II,
                  Arcad, Rdi)
                </div>
                <div className={`${styles.infojob} english`}>
                  IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
                </div>
                <div className={`${styles.infojob} spanish`}>
                  IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
                </div>
                <div className={styles.lieu}>
                  04/02/2019 =&gt; 04/08/2019: OCSI, Paris I
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={styles.titreh3}>Webmaster</h3>
                <div className={`${styles.infojob} french`}>
                  Mise &agrave; jour de la base de données site Ecommerce
                  (magento)
                </div>
                <div className={`${styles.infojob} english`}>
                  Update of the Ecommerce website database (magento)
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Actualización de la base de datos del sitio snow-concept.com
                  (magento)
                </div>
                <div className={styles.lieu}>
                  06/12/2016 =&gt; 16/01/2017: www.snow-concept.com, l'Alpe
                  d'Huez
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Technicien audio-visuel
                </h3>
                <div className={`${styles.infojob} french`}>
                  JLA productions, Auteurs Associés, EuropaCorp
                </div>
                <h3 className={`${styles.titreh3} english`}>
                  Audio-visual technician
                </h3>
                <div className={`${styles.infojob} english`}>
                  JLA productions, Auteurs Associés, EuropaCorp
                </div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Técnico audiovisual
                </h3>
                <div className={`${styles.infojob} spanish`}>
                  gerente de apoyos: JLA productions, Martigues
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Subgerente: Auteurs Associés, Grasse
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Refuerzo de decoración y figuración: Gazelle Cie, DEMD,
                  Europacorp, Marseille
                </div>
                <div className={styles.lieu}>2013 =&gt; 2015</div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Dessinateur Projeteur HVAC
                </h3>
                <div className={`${styles.infojob} french`}>
                  Etude des projets de construction ERP &quot;Castorama&quot;
                  Toulouse Union et Antibes
                </div>
                <h3 className={`${styles.titreh3} english`}>HVAC designer</h3>
                <div className={`${styles.infojob} english`}>
                  Castorama Toulouse and Antibes building materials store
                  construction
                </div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Diseñador de HVAC
                </h3>
                <div className={`${styles.infojob} spanish`}>
                  Estudio de proyectos de construcción de tiendas "Castorama"
                  Toulouse Union y Antibes, ingeniería AUXITEC, Hyères
                </div>
                <div className={styles.lieu}>
                  09/2012 =&gt; 12/2012: AUXITEC ingénierie, Hy&egrave;res
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>Developpeur web</h3>
                <div className={`${styles.infojob} french`}>
                  Introduction &agrave; JavaScript (JQuery)
                </div>
                <h3 className={`${styles.titreh3} english`}>web Developer</h3>
                <div className={`${styles.infojob} english`}>
                  Introduction to JavaScript (JQuery)
                </div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Desarrollador web
                </h3>
                <div className={`${styles.infojob} spanish`}>
                  introducción a JavaScript (JQuery)
                </div>
                <div className={styles.lieu}>
                  03/2012 =&gt; 06/2012: Alphabet Stand Service, La Garde
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Technicien etudes en Design et Decoration
                </h3>
                <div className={`${styles.infojob} french`}>
                  Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM...)
                </div>
                <h3 className={`${styles.titreh3} english`}>
                  Design and Decoration Technician
                </h3>
                <div className={`${styles.infojob} english`}>
                  Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM...)
                </div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Técnico de Diseño y Decoración
                </h3>
                <div className={`${styles.infojob} spanish`}>
                  Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM
                  &mldr;)
                </div>
                <div className={styles.lieu}>
                  09/2010 =&gt; 06/2012: La Garde
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Vendeur et Technicien Ski
                </h3>
                <div className={`${styles.infojob} french`}>Nevada Sports</div>
                <h3 className={`${styles.titreh3} english`}>Ski Technician</h3>
                <div className={`${styles.infojob} english`}>Nevada Sports</div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Vendedor de esquí y de material deportivo
                </h3>
                <div className={`${styles.infojob} spanish`}>Nevada Sports</div>
                <div className={styles.lieu}>
                  12/2008 =&gt; 04/2009: l'Alpe d'Huez
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>Technicien ADSL</h3>
                <div className={`${styles.infojob} french`}>
                  British Telecom Critical Systems
                </div>
                <h3 className={`${styles.titreh3} english`}>ADSL Technician</h3>
                <div className={`${styles.infojob} english`}>
                  British Telecom Critical Systems
                </div>
                <h3 className={`${styles.titreh3} spanish`}>Técnico de ADSL</h3>
                <div className={`${styles.infojob} spanish`}>
                  British Telecom Critical Systems
                </div>
                <div className={styles.lieu}>
                  07/2008 =&gt; 12/2008: Le Plessis-Robinson
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Technicien Ski et Snowboard
                </h3>
                <div className={`${styles.infojob} french`}>Intersport</div>
                <h3 className={`${styles.titreh3} english`}>
                  Ski and Snowboard Technician
                </h3>
                <div className={`${styles.infojob} english`}>Intersport</div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Técnico de esquí y snowboard
                </h3>
                <div className={`${styles.infojob} spanish`}>Intersport</div>
                <div className={styles.lieu}>
                  12/2007 =&gt; 04/2008: l'Alpe d'Huez
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Administrateur systemes et reseaux
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  Systems and Network Administrator
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Administrador de Sistemas y Redes
                </h3>
                <div className={`${styles.infojob} french`}>
                  Administration serveurs Windows, clients LINUX, developpement
                  html php
                </div>
                <div className={`${styles.infojob} english`}>
                  Windows server administration, LINUX clients, html php
                  development
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Administración de servidores y clientes LINUX Mantenimiento e
                  instalación de sistemas infojobrmáticos, desarollamiento html
                  php (script de copia de seguridad)
                </div>
                <div className={styles.lieu}>
                  09/2005 =&gt; 06/2007: SECOB, St Jean-de-la-Ruelle
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Technicien Systemes et Reseaux
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  Systems and Network Technician
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Técnico de Sistemas y Redes
                </h3>
                <div className={`${styles.infojob} french`}>
                  Maintenance et installation systemes informatique
                  Developpement html php d&apos;un site de devis securisé
                </div>
                <div className={`${styles.infojob} english`}>
                  System and network Deployment and php dev
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Mantenimiento e instalación de sistemas infojobrmáticos PHP
                  html desarrollo de un sitio de cotizaciones seguras
                </div>
                <div className={styles.lieu}>
                  03/2005 =&gt; 06/2005: Emergence, Orléans
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Adjoint au responsable de magasin
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  Assistant to the store manager
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Asistente del gerente de la tienda
                </h3>
                <div className={`${styles.infojob} french`}>Micromania</div>
                <div className={`${styles.infojob} english`}>Micromania</div>
                <div className={`${styles.infojob} spanish`}>Micromania</div>
                <div className={styles.lieu}>
                  06/2003 =&gt; 02/2004: St Jean de la Ruelle
                </div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>Emplois etudiant</h3>
                <div className={`${styles.infojob} french`}>
                  Conseiller de vente en espace culturel Leclerc,
                  serveur/barman, Ouvrier boulanger, Employé polyvalent chez
                  Intermarché
                </div>
                <h3 className={`${styles.titreh3} english`}>Student jobs</h3>
                <div className={`${styles.infojob} english`}>
                  Seller in espace culturel Leclerc, waiter / bartender, Bakery
                  worker, multi-purpose employee at grocery store
                </div>
                <h3 className={`${styles.titreh3} spanish`}>
                  Trabajos de estudiante
                </h3>
                <div className={`${styles.infojob} spanish`}>
                  Asesor de ventas culturales Leclerc, camarero / camarero,
                  trabajador de panadería, empleado multipropósito en
                  Intermarché
                </div>
              </div>
            </div>
            <div className={styles.competen} id="formation">
              <h2 className={`${styles.titreh2} french`}>Formation</h2>
              <h2 className={`${styles.titreh2} english`}>Training</h2>
              <h2 className={`${styles.titreh2} spanish`}>Formación</h2>
              <div className={styles.jobs}>
                <h3 className={styles.titreh3}>Pepiniere IBM</h3>
                <div className={`${styles.infojob} french`}>
                  IBM RPG II, RPGLE, SQL, CLP
                </div>
                <div className={`${styles.infojob} english`}>
                  IBM RPG II, RPGLE, SQL, CLP
                </div>
                <div className={`${styles.infojob} spanish`}>
                  RPG II, RPGLE, SQL, CLP
                </div>
                <div className={`${styles.infojob} french`}>
                  RDi, SQL for IBM db2, DDS/DDL
                </div>
                <div className={`${styles.infojob} english`}>
                  RDi, SQL for IBM db2, DDS/DDL
                </div>
                <div className={`${styles.infojob} spanish`}>
                  RDi, SQL for IBM db2, DDS/DDL
                </div>
                <div className={`${styles.infojob} french`}>
                  Webservices and PHP for IBM i series
                </div>
                <div className={`${styles.infojob} english`}>
                  Webservices and PHP for IBM i series
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Webservices and PHP for IBM i series
                </div>
                <div className={styles.lieu}>2018 OCSI Paris I</div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Developpeur JavaScript FullStack
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  FullStack Javascript Developer
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Desarollador Javascript de pila completa
                </h3>
                <div className={`${styles.infojob} french`}>
                  Développement et management d&apos;un projet web
                </div>
                <div className={`${styles.infojob} english`}>
                  Development and management of a web project
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Desarolla y gestión de un proyecto web
                </div>
                <div className={`${styles.infojob} french`}>
                  Création de sites web statiques riche front-end JS
                </div>
                <div className={`${styles.infojob} english`}>
                  Creating Static Rich Front-end JS Websites
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Creación de sitios web estáticos de front-end JS estáticos
                </div>
                <div className={`${styles.infojob} french`}>
                  Création d&apos;applications web et mobiles riche backend JS
                </div>
                <div className={`${styles.infojob} english`}>
                  Creating rich web and mobile applications backend JS
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Creación de aplicaciones web y móviles ricas en el back-end de
                  JS
                </div>
                <div className={styles.lieu}>2017 IFOCOP Paris XI</div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  TP de technicien etude en batiment option dessin
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  Construction Engineer Assistant
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Técnico de Ingeniería de Construcción
                </h3>
                <div className={styles.infojob}>
                  Photoshop, Autocad, Archicad, Artlantis
                </div>
                <div className={`${styles.infojob} french`}>
                  Design, techniques et normes de construction
                </div>
                <div className={`${styles.infojob} english`}>
                  Design, techniques and construction standards
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Diseño, técnicas y estándares de construcción
                </div>
                <div className={`${styles.infojob} french`}>
                  Notions d&apos;urbanisme et de voirie
                </div>
                <div className={`${styles.infojob} english`}>
                  Notions of town planning and roads
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Nociones de urbanismo y carreteras
                </div>
                <div className={styles.lieu}>2009 AFPA La Valette-du-var</div>
              </div>
              <div className={styles.jobs}>
                <h3 className={styles.titreh3}>
                  DUT informatique genie logiciel
                </h3>
                <div className={`${styles.infojob} french`}>
                  Administration et déploiementent réseau en environnement
                  Linux, cli, regexp
                  <br />
                  Base de Données: Analyse (merise), conception (MCD, MCT),
                  maintenance
                  <br />
                  Programmation C, C++, SQL, shell script
                </div>
                <div className={`${styles.infojob} english`}>
                  Systems and Networks: Linux environment, CLI, regexp
                  <br />
                  Database: Analysis, design, SQL
                  <br />
                  Programming: C, C++, shell script
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Sistemas y Redes: Red de administración e implementación de
                  sistemas en entorno Linux, nociones de ensamblador regexp Base
                  de Datos: Análisis (merise), diseño (MCD, MCT), mantenimiento
                  Programación: Langage C, C++, SQL, bsh, assembly language
                </div>
                <div className={styles.lieu}>2003 IUT d'Orléans</div>
              </div>
              <div className={styles.jobs}>
                <h3 className={`${styles.titreh3} french`}>
                  Baccalaureat Scientifique
                </h3>
                <h3 className={`${styles.titreh3} english`}>
                  Scientific Baccalaureate Diploma
                </h3>
                <h3 className={`${styles.titreh3} spanish`}>
                  Bachillerato Científico
                </h3>
                <div className={`${styles.infojob} french`}>
                  Spécialité physique-chimie
                </div>
                <div className={`${styles.infojob} english`}>
                  Specialty physics-chemistry
                </div>
                <div className={`${styles.infojob} spanish`}>
                  Especialidad física-química
                </div>
                <div className={styles.lieu}>2001 Orléans</div>
              </div>
            </div>
            <div className={styles.competen} id="complementaire">
              <div className={`${styles.infojob} french`}>
                Permis : auto, moto, monoroue electrique.
                <br />
                Sports: gym, sports de glisse, jonglage.
                <br />
                Hobbies: electronique, décoration, design, rénovation.
              </div>
              <div className={`${styles.infojob} english`}>
                Driving licences: car, motorcycle, electric unicycle.
                <br />
                Sports: gym, boardsports, juggling.
                <br />
                Hobbies: electronics, decoration, design, renovation.
              </div>
              <div className={`${styles.infojob} spanish`}>
                Permiso: auto, motocicleta. Deporte: gimnasio, deportes de
                tabla, ciclismo de montaña. Hobbies: electrónica, decoración,
                diseño, renovación.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default JeuCv
