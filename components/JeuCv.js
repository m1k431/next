import React, { Component } from 'react'
import uk from '../public/img/uk.svg'
import fr from '../public/img/france.svg'
import $ from 'jquery'
import styles from './JeuCv.module.scss'

class JeuCv extends Component {
  jeuBreaker = function () {
    //Sections du cv
    $('#m0ncentrage').fadeIn(1000)
    $('#competen').fadeIn(500)
    $('#experiences').fadeIn(375)
    $('#formation').fadeIn(250)
    $('#complementaire').fadeIn(125)
    $('.moi').fadeIn()
    $('.metier').fadeIn()
    $('#metier > h2').fadeOut(375, function () {
      $(this).text('Click or Touch here to START').fadeIn(375)
    })
    //$('#scoreForm').fadeOut()
    var $div2blink = $('#metier') // Save reference, only look this item up once, then save
    var idInterBlink = setInterval(function () {
      $div2blink.toggleClass('blink')
    }, 700)

    //_______________________________Choix_langue____________________________________________________________________________
    $('.english').fadeIn()

    window.document.getElementById('french').onclick = () => {
      //play(flagS)
      $('.english').hide()
      $('.spanish').hide()
      $('.french').hide()
      $('#competen').css('height', 'auto')
      $('.french').fadeIn()
    }
    window.document.getElementById('english').onclick = () => {
      //play(flagS)
      $('.french').hide()
      $('.spanish').hide()
      $('.english').hide()
      $('#competen').css('height', 'auto')
      $('.english').fadeIn()
    }

    //_____________________________Click_on_START__________________________________________________________________________
    var bStart = window.document.getElementById('metier')
    bStart.addEventListener('click', varsStart, true)

    function varsStart() {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      const context = new AudioContext()
      var audioStack
      var pongA = '/sound/pongA.mp3'
      var pongB = '/sound/pongB.mp3'
      var pongC = '/sound/pongC.mp3'
      var start = '/sound/start.mp3'
      //ghibertoStyle
      //var start = '/sound/ghibertoRJ45.mp3'
      play(start)
      var youWin = '/sound/youWin.mp3'
      var miss = '/sound/miss.mp3'
      var score = 0
      var combo = 1
      var clickMove = false
      $('#scoreForm').hide()
      $('#highScore').hide()
      //$('#complementaire').hide()

      //____________________INITIALISATION ENVIRONNEMENT________________________________________________________________
      var competences = window.document.getElementById('competen')
      $('#competen').toggleClass(styles.competencesT)
      var informatique = window.document.getElementById('informatique')
      var commerciales = window.document.getElementById('commerciales')
      var linkedIn = window.document.getElementById('linkedIn')
      var complementaire = window.document.getElementById('complementaire')
      clearInterval(idInterBlink)
      $div2blink.removeClass('blink')
      $div2blink.css('background-color', 'rgba(255, 255, 255, 0.4)')
      $('#metier > h2').text('SCORE: ' + score).fadeIn(375)
      $('#metier > h2').css('font-size', '1.5em')

      //________________________________________DIV FOOTBALL SPRITE_____________________________________________
      var divSprite = window.document.createElement('div')
      divSprite.id = 'divSprite'
      divSprite.className = 'divsprite'
      divSprite.style.position = 'absolute'
      divSprite.style.height = '25px'
      divSprite.style.width = '25px'
      divSprite.style.overflow = 'hidden'
      competences.appendChild(divSprite)

      //________________________________________footBall Sprite_________________________________________________
      var imgSoccer = window.document.createElement('img')
      imgSoccer.id = 'imgSoccer'
      imgSoccer.className = 'imgsoccer'
      imgSoccer.style.position = 'absolute'
      imgSoccer.style.height = '100px'
      imgSoccer.style.left = '-13px'
      imgSoccer.style.top = -18 + 'px'
      imgSoccer.style.top = '-px'
      imgSoccer.src = '/img/soccerBall.png'
      imgSoccer.style.backgroundColor = 'none'
      divSprite.appendChild(imgSoccer)

      //________________________________________Paddle + hauteur breaker_____________________________________
      linkedIn.className = 'linkedinT'
      $('#linkedIn').fadeIn(2000)
      window.document.getElementById('linkedIn').style.left = competences.offsetWidth / 2 - 40 + 'px'
      linkedIn.style.top = competences.offsetTop + competences.offsetHeight - 60 + 'px'
      //complementaire.className = 'complementaireT'

      //________________________________________INITIALISTATION BRICKS_______________________________________
      var mesDivInfos = window.document.getElementsByClassName(styles.infoJeu)
      var i = mesDivInfos.length
      i--
      while (i >= 0) {
        mesDivInfos[i].setAttribute('class', styles.infoT)
        i--
      }
      informatique.style.verticalAlign = 'top'
      commerciales.style.verticalAlign = 'top'
      $('html, body').animate({
        scrollTop: $('#competen').offset().top - 80
      }, 750)
      $('#btp').fadeOut()
      $('#commerciales').fadeOut()
      $('#informatique').animate({
        width: '98%'
      }, 1000)

      //_________________________________________INITIALISATIION_JEU______________________________________
      var ballX = linkedIn.offsetLeft + linkedIn.offsetWidth / 2 - divSprite.offsetWidth / 2
      var ballY = linkedIn.offsetTop - divSprite.offsetHeight
      divSprite.style.left = ballX + 'px'
      divSprite.style.top = ballY + 'px'
      var ballLeft = true
      var ballDown = false
      var youwin = false
      var angle = 1
      var idAni, idL

      //__________________________________________WEB_Audio_API___________________________________________________________
      function play(url) {
        audioStack = []
        var nextTime = 0
        fetch(url).then(function (response) {
          var reader = response.body.getReader()
          function read() {
            return reader.read().then(({
              value,
              done
            }) => {
              if (done) {
                //console.log('done');
                return
              } else {
                //console.log(value, done);
                context.decodeAudioData(value.buffer, function (buffer) {
                  audioStack.push(buffer)
                  if (audioStack.length) {
                    scheduleBuffers()
                  }
                }, function (err) {
                  console.log('err(decodeAudioData): ' + err)
                })
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
            if (nextTime === 0)
              nextTime = context.currentTime + 0.01 /// add 50ms latency to work well across systems - tune this if you like
            source.start(nextTime)
            nextTime += source.buffer.duration // Make the next buffer wait the length of the last buffer before being played
          }
        }
      }


      //____________________________________TouchMove_eventListener___________________________________
      var box2 = document.getElementById('linkedIn'),
        boxleft, // left position of moving box
        startx, // starting x coordinate of touch point
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
        box2.style.left = (boxleft + dist > competences.offsetLeft + competences.offsetWidth - linkedIn.offsetWidth)
          ? competences.offsetLeft + competences.offsetWidth - linkedIn.offsetWidth - 5 + 'px'
          : (boxleft + dist < competences.offsetLeft)
            ? competences.offsetLeft - 5 + 'px'
            : boxleft + dist - 5 + 'px'
        if (clickMove === true) {
          ballX = linkedIn.offsetLeft + linkedIn.offsetWidth / 2 - divSprite.offsetWidth / 2
          ballY = linkedIn.offsetTop - divSprite.offsetHeight
          divSprite.style.left = ballX + 'px'
          divSprite.style.top = ballY + 'px'
        }

      }

      window.document.addEventListener('touchstart', eTouchStart, true)
      window.document.addEventListener('touchmove', eTouchMove, true)
      bStart.removeEventListener('click', varsStart, true)

      //__________________________________Déplacement paddle dans environnement de jeu________________________________________________________________________
      var movepaddle = function (mon0bjetEvent) {
        if (mon0bjetEvent.clientX - linkedIn.offsetWidth / 2 > competences.offsetLeft && mon0bjetEvent.clientX + linkedIn.offsetWidth / 2 < competences.offsetWidth + competences.offsetLeft) {
          linkedIn.style.left = mon0bjetEvent.clientX - linkedIn.offsetWidth / 2 - 5 + 'px'
        }
        else if (mon0bjetEvent.clientX - linkedIn.offsetWidth / 2 < competences.offsetLeft) {
          linkedIn.style.left = competences.offsetLeft - 5 + 'px'
        }
        else if (mon0bjetEvent.clientX + linkedIn.offsetWidth / 2 > competences.offsetWidth + competences.offsetLeft) {
          linkedIn.style.left = competences.offsetLeft + competences.offsetWidth - linkedIn.offsetWidth - 5 + 'px'
        }
        if (clickMove === true) {
          ballX = linkedIn.offsetLeft + linkedIn.offsetWidth / 2 - divSprite.offsetWidth / 2
          ballY = linkedIn.offsetTop - divSprite.offsetHeight
          divSprite.style.left = ballX + 'px'
          divSprite.style.top = ballY + 'px'
        }
      }
      window.document.addEventListener('mousemove', movepaddle, true)

      //____________________________________ANIMATION_Ball_Sprite______________________________________
      var animSprite = function () {
        if (parseFloat(imgSoccer.style.left) > -72) {
          imgSoccer.style.left = parseFloat(imgSoccer.style.left) - 39 + 'px'
        } else if (parseFloat(imgSoccer.style.top) > -50) {
          imgSoccer.style.left = -13 + 'px'
          imgSoccer.style.top = parseFloat(imgSoccer.style.top) - 40 + 'px'
        } else {
          imgSoccer.style.left = -13 + 'px'
          imgSoccer.style.top = -18 + 'px'
        }
      }

      //gestion reprise jeu après click
      var animMoveBall = function () {
        clickMove = false
        idL = setInterval(animSprite, 60)
        window.document.removeEventListener('click', animMoveBall, true)
        bouclePrincpale()
      }
      /*
      var animSpriteR = function() {
          if (parseFloat(imgSoccer.style.left) < -2) {
              imgSoccer.style.left = parseFloat(imgSoccer.style.left) + 17.5 + 'px'
          }
          else {
              imgSoccer.style.left = -141.8 + 'px'
          }
          cancelAnimationFrame(idL)
          idR = requestAnimationFrame(animSpriteR)
      }*/

      //__________________________________Intéraction_balle/paddle_AngleBalle_______________________________________________________
      var paddle = function () {
        //Left paddle side
        if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 2) {
          ballDown = false
          ballLeft = true
          combo += 1
          play(pongB)
          //angle renvoi balle
          if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 8) {
            angle = 4
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 4) {
            angle = 3
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 4 + linkedIn.offsetWidth / 8) {
            angle = 2
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth / 2) {
            angle = 1
          }
        }
        //Right paddle side
        else if (ballX + divSprite.offsetWidth / 2 > linkedIn.offsetLeft && ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth + 5) {
          ballDown = false
          ballLeft = false
          combo += 1
          play(pongB)
          //angle renvoi balle
          if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 5 / 8) {
            angle = 1
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 6 / 8) {
            angle = 2
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth * 7 / 8) {
            angle = 3
          }
          else if (ballX + divSprite.offsetWidth / 2 < linkedIn.offsetLeft + linkedIn.offsetWidth) {
            angle = 4
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
          if (ballX + divSprite.offsetWidth > mesInfosT[i].offsetLeft           //left
            && ballX < mesInfosT[i].offsetLeft + mesInfosT[i].offsetWidth       //right
            && ballY + divSprite.offsetHeight > mesInfosT[i].offsetTop          //haut
            && ballY < mesInfosT[i].offsetTop + mesInfosT[i].offsetHeight) {    //bas

            gauche = Math.abs(ballX + divSprite.offsetWidth - mesInfosT[i].offsetLeft)
            droite = Math.abs(ballX - mesInfosT[i].offsetLeft - mesInfosT[i].offsetWidth)
            haut = Math.abs(ballY + divSprite.offsetHeight - mesInfosT[i].offsetTop)
            bas = Math.abs(ballY - mesInfosT[i].offsetTop - mesInfosT[i].offsetHeight)
            mini = Math.min(gauche, droite, haut, bas)

            switch (mini) {
              case gauche:
                ballLeft = true
                break
              case droite:
                ballLeft = false
                break
              case haut:
                ballDown = false
                break
              case bas:
                ballDown = true
                break
              default:
            }

            play(pongC)
            $(mesInfosT[i]).animate({
              backgroundColor: 'rgba(255, 255, 255, 0.4)'
            }, 500)
            mesInfosT[i].className = styles.infoJeu
            score += 50 * combo
          }
          i--
        }
      }

      var deplacerBalle = function () {
        var ballSpeed = 2
        divSprite.style.top = ballY + 'px'
        //ball move left right limit
        if (ballX < competences.offsetLeft + competences.offsetWidth - divSprite.offsetWidth && !ballLeft) {
          ballX = ballX + angle * ballSpeed
          divSprite.style.left = ballX + 'px'
        }
        else if (ballX > competences.offsetLeft) {
          ballLeft = true
          ballX = ballX - angle * ballSpeed
          divSprite.style.left = ballX + 'px'

        }
        else {
          ballLeft = false
          play(pongA)
        }
        //ball move up down limit
        if (ballY >= competences.offsetTop && !ballDown) {
          ballY = ballY - 2 * ballSpeed
          divSprite.style.top = ballY + 'px'
        } else if (ballY < competences.offsetTop + competences.offsetHeight - 30) {
          ballDown = true
          ballY = ballY + 2 * ballSpeed
          divSprite.style.top = ballY + 'px'
          if (ballY + divSprite.offsetHeight > linkedIn.offsetTop && ballY < linkedIn.offsetTop + 5)
            paddle()
        } else {
          ballDown = false
          clickMove = true
          combo = 1
          //------------Short hand style if---------------
          score >= 100 ? score -= 100 : score = 0
          //----------------------------------------------
          $('#metier > h2').text('SCORE: ' + score).css({
            'color': 'red',
            'font-family': 'sans-serif',
            'font-size': '2em'
          }).fadeIn(375)
          combo = 1
          clearInterval(idL)
          play(miss)
        }
        if (ballX + divSprite.offsetWidth > competences.offsetLeft + competences.offsetWidth) {
          play(pongA)
        }
        if (ballY < competences.offsetTop) {
          play(pongA)
        }

      }

      //________________________________________________Verif/Gestion_YouWIN______________________________________________________________________________
      var jeuTermine = function () {
        var mesInfosT = window.document.getElementsByClassName(styles.infoT)
        //var competences = window.document.getElementById('competen')
        //YOU WIN
        if (!mesInfosT.length && fuse === 1) {
          fuse--
          stopEvent = true
          play(youWin)
          //competences.removeChild(divSprite)
          linkedIn.style.left = 'auto'
          ballY = linkedIn.offsetTop
          linkedIn.className = 'linkedin'
          $('#linkedIn').hide()
          $('#imgSoccer').hide()
          $('#competen').toggleClass(styles.competen)
          //$('#informatique').fadeOut()
          informatique.style.verticalAlign = 'middle'
          commerciales.style.verticalAlign = 'middle'
          youwin = true
          $('#skills').hide()
          $('#score').fadeIn()
          $('#btp').fadeIn()
          $('#informatique').animate({
            width: '33%'
          }, 1000)
          $('#competen').css('height', 'auto')
          $('#commerciales').fadeIn()
          $('#scoreForm').fadeIn()
          //Requete AJAX SELECT pour affichage tableau score
          $.ajax({
            type: 'GET',
            url: '/highscore',
            dataType: 'json',
            success: function (reponse) {
              console.log('GET success: ' + reponse)
              var tbodyEl = $('tbody')
              tbodyEl.html('')
              reponse.forEach(function (score) {
                tbodyEl.append(`<tr><td>${score.name}</td><td>${score.score}</td></tr>`)
              })
            }
          })
          $('#highScore').fadeIn()
        }
      }

      //requete AJAX submit score
      $('#scoreForm').on('submit', function (event) {
        event.preventDefault()
        console.log($('#postName').val() + '/' + score)
        $('#scoreForm').hide()
        $.ajax({
          type: 'POST',
          url: '/highscore',
          dataType: 'json',
          data: {
            name: $('#postName').val(),
            score: score
          },
          complete: function (response) {
            console.log('POST success: ' + response)
            $.ajax({
              type: 'GET',
              url: '/highscore',
              dataType: 'json',
              success: function (reponse) {
                console.log('GET success: ' + reponse)
                var tbodyEl = $('tbody')
                tbodyEl.html('')
                reponse.forEach(function (score) {
                  tbodyEl.append(`<tr><td>${score.name}</td><td>${score.score}</td></tr>`)
                })
              }
            })
          }
        })
      })



      //----------------------------FPS control
      var fps = 60,
        now,
        then = Date.now(),
        interval = 1000 / fps,
        delta

      let fuse = 1
      var stopEvent = false
      idL = setInterval(animSprite, 60)
      clearInterval(idL)

      clickMove = true

      //_____________________MAIN()_____Déplacement_balle_dans_Environnement__________________________
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
            $('#metier > h2').text('SCORE: ' + score).fadeIn()
            jeuTermine()

            if (clickMove === false && fuse === 1) {
              $('#metier > h2').text('SCORE: ' + score).css({
                'color': 'black',
                'font-family': 'sans-serif',
                'font-size': '2em'
              }).fadeIn(375)
            }
            else {
              cancelAnimationFrame(idAni)
              window.document.addEventListener('click', animMoveBall, true)
            }

            if (stopEvent) {
              window.document.removeEventListener('click', animMoveBall, true)
              window.document.removeEventListener('mousemove', movepaddle, true)
              window.document.removeEventListener('click', eTouchStart, true)
              window.document.removeEventListener('click', eTouchMove, true)
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
    const metier = 'IBM NODEJS DEVELOPER'
    return (
      <section id="JeuCv">
        <div id="metier" onClick={this.varsStart}>
          <h2 className={styles.titreH2}>{metier}</h2>
        </div>
        <p className={styles.flags}>
          <img id="english" className={styles.imgFlag} src={uk} alt="English" height="30" />
          <img id="french" className={styles.imgFlag} src={fr} alt="Français" height="30" />
        </p>
        <div className={styles.competen} id="competen">
          <h2 className={`${styles.titreh2} french`}>Competences</h2>
          <h2 className={`${styles.titreh2} english`}>Skills</h2>
          <h2 className={`${styles.titreh2} spanish`}>Competencias</h2>
          <div className={styles.informatiquesCont} id="informatique">
            <h3 className={styles.titreh3}>Front End</h3>
            <div className={styles.informatiques}>
              <div className={styles.infoJeu}>SQL</div>
              <div className={styles.infoJeu}>RPGLE</div>
              <div className={styles.infoJeu}>CLP</div>
              <div className={styles.infoJeu}>ES6</div>
              <div className={styles.infoJeu}>HTML5</div>
              <div className={styles.infoJeu}>jade/PUG</div>
              <div className={styles.infoJeu}>JQUERY</div>
              <div className={styles.infoJeu}>SCSS</div>
              <div className={styles.infoJeu}>DOM</div>
              <div className={styles.infoJeu}>REACTJS</div>
            </div>
            <h3 className={styles.titreh3}>Back End</h3>
            <div className={styles.informatiques}>
              <div className={styles.infoJeu}>IBM i</div>
              <div className={styles.infoJeu}>IBM db2</div>
              <div className={styles.infoJeu}>NodeJS</div>
              <div className={styles.infoJeu}>ExpressJS</div>
              <div className={styles.infoJeu}>Ajax</div>
            </div>
            <h3 className={styles.titreh3}>Tools</h3>
            <div className={styles.informatiquesLast}>
              <div className={styles.infoJeu}>Git</div>
              <div className={styles.infoJeu}>IBM RDi</div>
              <div className={styles.infoJeu}>ARCAD for IBM i</div>
              <div className={styles.infoJeu}>bsh/zsh</div>
              <div className={styles.infoJeu}>LINUX</div>
              <div className={styles.infoJeu}>osX</div>
              <div className={styles.infoJeu}>Photoshop</div>
              <div className={styles.infoJeu}>Windows</div>
            </div>
            <div id="linkedIn"> </div>
          </div>
          <div className={styles.btp} id="btp">
            <h3 className={`${styles.titreh3} french`}>Techniques Design</h3>
            <h3 className={`${styles.titreh3} english`}>Technics Design</h3>
            <h3 className={`${styles.titreh3} spanish`}>Técnicas diseño</h3>
            <div className={`${styles.info} french`}>
              Réaliser l'étude technique d'un projet
              de construction et en estimer le co&ucirc;t
          </div>
            <div className={`${styles.info} english`}>
              Conduct the technical study of a construction project and estimate
              the cost
          </div>
            <div className={`${styles.info} spanish`}>
              Estudio técnico de un proyecto de construcción y estimación del
              costo
          </div>
            <div className={`${styles.info} french`}>
              Réaliser la représentation graphique d'une
              construction ou de design intérieur (Autocad, ArchiCAD,
              VectorWorks, Artlantis)
          </div>
            <div className={`${styles.info} english`}>
              Realize the graphic representation of a construction or interior
              design (Autocad, ArchiCAD, VectorWorks, Artlantis)
          </div>
            <div className={`${styles.info} spanish`}>
              Realización de representaciónes gráficas de construcción y de
              diseño interiores (Autocad, ArchiCAD, VectorWorks, Artlantis)
          </div>
            <div className={`${styles.infolast} french`}>
              Réaliser un dossier de détails
              d'exécutions de projet (Autocad, VectorWorks)
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
              Asistente de dirección en el Palais des Festivals de Cannes y en
              oficina de producciones televisivas
          </div>
            <div className={`${styles.info} french`}>
              Mener un entretien de négociations de produits ou de
              services
          </div>
            <div className={`${styles.info} english`}>
              Commercial negotiation of products or services
          </div>
            <div className={`${styles.info} spanish`}>Negociación de productos o servicios</div>
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
        <div className={styles.competen} id="experiences">
          <h2 className={`${styles.titreh2} french`}>Experiences</h2>
          <h2 className={`${styles.titreh2} english`}>Experiences</h2>
          <h2 className={`${styles.titreh2} spanish`}>Experiencia profesional</h2>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Developpeur logiciel IBM i</h3>
            <h3 className={`${styles.titreh3} english`}>IBM i developer</h3>
            <div className={`${styles.infojob} french`}>
              Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad,
              Rdi)
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
            <h3 className={`${styles.titreh3} french`}>Ingenieur etude et developpement IBM i</h3>
            <h3 className={`${styles.titreh3} english`}>IBM i software engineer</h3>
            <div className={`${styles.infojob} french`}>
              Développement sur IBM i (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad,
              Rdi)
          </div>
            <div className={`${styles.infojob} english`}>
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className={`${styles.infojob} spanish`}>
              IBM i Developer (QSH, CL, CLP, SQLRGPLE, RPG II, Arcad, Rdi)
          </div>
            <div className={styles.lieu}>04/02/2019 =&gt; 04/08/2019: OCSI, Paris I</div>
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
              06/12/2016 =&gt; 16/01/2017: www.snow-concept.com, l'Alpe d'Huez
          </div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Technicien audio-visuel</h3>
            <div className={`${styles.infojob} french`}>
              JLA productions, Auteurs Associés, EuropaCorp
          </div>
            <h3 className={`${styles.titreh3} english`}>Audio-visual technician</h3>
            <div className={`${styles.infojob} english`}>
              JLA productions, Auteurs Associés, EuropaCorp
          </div>
            <h3 className={`${styles.titreh3} spanish`}>Técnico audiovisual</h3>
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
            <h3 className={`${styles.titreh3} french`}>Dessinateur Projeteur HVAC</h3>
            <div className={`${styles.infojob} french`}>
              Etude des projets de construction ERP &quot;Castorama&quot;
              Toulouse Union et Antibes
          </div>
            <h3 className={`${styles.titreh3} english`}>HVAC designer</h3>
            <div className={`${styles.infojob} english`}>
              Castorama Toulouse and Antibes building materials store
              construction
          </div>
            <h3 className={`${styles.titreh3} spanish`}>Diseñador de HVAC</h3>
            <div className={`${styles.infojob} spanish`}>
              Estudio de proyectos de construcción de tiendas "Castorama"
              Toulouse Union y Antibes, ingeniería AUXITEC, Hyères
          </div>
            <div className={styles.lieu, styles.english}>
              09/2012 =&gt; 12/2012: AUXITEC engineering, Hyères
          </div>
            <div className={styles.lieu, styles.french}>
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
            <h3 className={`${styles.titreh3} spanish`}>Desarrollador web</h3>
            <div className={`${styles.infojob} spanish`}>
              introducción a JavaScript (JQuery)
          </div>
            <div className={styles.lieu}>
              03/2012 =&gt; 06/2012: Alphabet Stand Service, La Garde
          </div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Technicien etudes en Design et Decoration</h3>
            <div className={`${styles.infojob} french`}>
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM...)
          </div>
            <h3 className={`${styles.titreh3} english`}>Design and Decoration Technician</h3>
            <div className={`${styles.infojob} english`}>
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM...)
          </div>
            <h3 className={`${styles.titreh3} spanish`}>Técnico de Diseño y Decoración</h3>
            <div className={`${styles.infojob} spanish`}>
              Alphabet Stand Service (MIPCOM/MIPTV, MIDEM, FIF, MIPIM &mldr;)
          </div>
            <div className={styles.lieu}>09/2010 =&gt; 06/2012: La Garde</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Vendeur et Technicien Ski</h3>
            <div className={`${styles.infojob} french`}>Nevada Sports</div>
            <h3 className={`${styles.titreh3} english`}>Ski Technician</h3>
            <div className={`${styles.infojob} english`}>Nevada Sports</div>
            <h3 className={`${styles.titreh3} spanish`}>Vendedor de esquí y de material deportivo</h3>
            <div className={`${styles.infojob} spanish`}>Nevada Sports</div>
            <div className={styles.lieu}>
              12/2008 =&gt; 04/2009: l'Alpe d'Huez
          </div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Technicien ADSL</h3>
            <div className={`${styles.infojob} french`}>British Telecom Critical Systems</div>
            <h3 className={`${styles.titreh3} english`}>ADSL Technician</h3>
            <div className={`${styles.infojob} english`}>British Telecom Critical Systems</div>
            <h3 className={`${styles.titreh3} spanish`}>Técnico de ADSL</h3>
            <div className={`${styles.infojob} spanish`}>British Telecom Critical Systems</div>
            <div className={styles.lieu}>07/2008 =&gt; 12/2008: Le Plessis-Robinson</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Technicien Ski et Snowboard</h3>
            <div className={`${styles.infojob} french`}>Intersport</div>
            <h3 className={`${styles.titreh3} english`}>Ski and Snowboard Technician</h3>
            <div className={`${styles.infojob} english`}>Intersport</div>
            <h3 className={`${styles.titreh3} spanish`}>Técnico de esquí y snowboard</h3>
            <div className={`${styles.infojob} spanish`}>Intersport</div>
            <div className={styles.lieu}>
              12/2007 =&gt; 04/2008: l'Alpe d'Huez
          </div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Administrateur systemes et reseaux</h3>
            <h3 className={`${styles.titreh3} english`}>Systems and Network Administrator</h3>
            <h3 className={`${styles.titreh3} spanish`}>Administrador de Sistemas y Redes</h3>
            <div className={`${styles.infojob} french`}>
              Administration serveurs Windows, clients LINUX, developpement html
              php
          </div>
            <div className={`${styles.infojob} english`}>
              Windows server administration, LINUX clients, html php development
          </div>
            <div className={`${styles.infojob} spanish`}>
              Administración de servidores y clientes LINUX Mantenimiento e
              instalación de sistemas infojobrmáticos, desarollamiento html php
              (script de copia de seguridad)
          </div>
            <div className={styles.lieu}>
              09/2005 =&gt; 06/2007: SECOB, St Jean-de-la-Ruelle
          </div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Technicien Systemes et Reseaux</h3>
            <h3 className={`${styles.titreh3} english`}>Systems and Network Technician</h3>
            <h3 className={`${styles.titreh3} spanish`}>Técnico de Sistemas y Redes</h3>
            <div className={`${styles.infojob} french`}>
              Maintenance et installation systemes informatique Developpement
              html php d&apos;un site de devis securisé
          </div>
            <div className={`${styles.infojob} english`}>
              System and network Deployment and php dev
          </div>
            <div className={`${styles.infojob} spanish`}>
              Mantenimiento e instalación de sistemas infojobrmáticos PHP html
              desarrollo de un sitio de cotizaciones seguras
          </div>
            <div className={styles.lieu}>03/2005 =&gt; 06/2005: Emergence, Orléans</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Adjoint au responsable de magasin</h3>
            <h3 className={`${styles.titreh3} english`}>Assistant to the store manager</h3>
            <h3 className={`${styles.titreh3} spanish`}>Asistente del gerente de la tienda</h3>
            <div className={`${styles.infojob} french`}>Micromania</div>
            <div className={`${styles.infojob} english`}>Micromania</div>
            <div className={`${styles.infojob} spanish`}>Micromania</div>
            <div className={styles.lieu}>06/2003 =&gt; 02/2004: St Jean de la Ruelle</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Emplois etudiant</h3>
            <div className={`${styles.infojob} french`}>
              Conseiller de vente en espace culturel Leclerc, serveur/barman,
              Ouvrier boulanger, Employé polyvalent chez
              Intermarché
          </div>
            <h3 className={`${styles.titreh3} english`}>Student jobs</h3>
            <div className={`${styles.infojob} english`}>
              Seller in espace culturel Leclerc, waiter / bartender, Bakery
              worker, multi-purpose employee at grocery store
          </div>
            <h3 className={`${styles.titreh3} spanish`}>Trabajos de estudiante</h3>
            <div className={`${styles.infojob} spanish`}>
              Asesor de ventas culturales Leclerc, camarero / camarero,
              trabajador de panadería, empleado multipropósito en Intermarché
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
            <div className={`${styles.infojob} spanish`}>RPG II, RPGLE, SQL, CLP</div>
            <div className={`${styles.infojob} french`}>RDi, SQL for IBM db2, DDS/DDL</div>
            <div className={`${styles.infojob} english`}>RDi, SQL for IBM db2, DDS/DDL</div>
            <div className={`${styles.infojob} spanish`}>RDi, SQL for IBM db2, DDS/DDL</div>
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
            <h3 className={`${styles.titreh3} french`}>Developpeur JavaScript FullStack</h3>
            <h3 className={`${styles.titreh3} english`}>FullStack Javascript Developer</h3>
            <h3 className={`${styles.titreh3} spanish`}>Desarollador Javascript de pila completa</h3>
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
              Création d&apos;applications web et mobiles riche backend
              JS
          </div>
            <div className={`${styles.infojob} english`}>
              Creating rich web and mobile applications backend JS
          </div>
            <div className={`${styles.infojob} spanish`}>
              Creación de aplicaciones web y móviles ricas en el back-end de JS
          </div>
            <div className={styles.lieu}>2017 IFOCOP Paris XI</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>TP de technicien etude en batiment option dessin</h3>
            <h3 className={`${styles.titreh3} english`}>Construction Engineer Assistant</h3>
            <h3 className={`${styles.titreh3} spanish`}>Técnico de Ingeniería de Construcción</h3>
            <div className={styles.infojob}>Photoshop, Autocad, Archicad, Artlantis</div>
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
            <h3 className={styles.titreh3}>DUT informatique genie logiciel</h3>
            <div className={`${styles.infojob} french`}>
              Administration et
              déploiementent réseau en
              environnement Linux, cli, regexp
            <br />
            Base de Données: Analyse (merise), conception (MCD, MCT),
            maintenance
            <br />
            Programmation C, C++, SQL, shell script
          </div>
            <div className={`${styles.infojob} english`}>
              Systems and Networks: Linux
              environment, CLI, regexp
            <br />
            Database: Analysis, design, SQL
            <br />
            Programming: C, C++, shell script
          </div>
            <div className={`${styles.infojob} spanish`}>
              Sistemas y Redes: Red de administración e implementación de
              sistemas en entorno Linux, nociones de ensamblador regexp
              Base de Datos: Análisis (merise), diseño (MCD, MCT), mantenimiento
              Programación: Langage C, C++, SQL, bsh, assembly language
          </div>
            <div className={styles.lieu}>2003 IUT d'Orléans</div>
          </div>
          <div className={styles.jobs}>
            <h3 className={`${styles.titreh3} french`}>Baccalaureat Scientifique</h3>
            <h3 className={`${styles.titreh3} english`}>Scientific Baccalaureate Diploma</h3>
            <h3 className={`${styles.titreh3} spanish`}>Bachillerato Científico</h3>
            <div className={`${styles.infojob} french`}>
              Spécialité physique-chimie
          </div>
            <div className={`${styles.infojob} english`}>Specialty physics-chemistry</div>
            <div className={`${styles.infojob} spanish`}>Especialidad física-química</div>
            <div className={styles.lieu}>2001 Orléans</div>
          </div>
        </div>
        <div className={styles.competen} id="complementaire">
          <div className={`${styles.infojob} french`}>Permis : auto, moto, monoroue electrique.
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
            Permiso: auto, motocicleta.
            Deporte: gimnasio, deportes de tabla, ciclismo de montaña.
            Hobbies: electrónica, decoración, diseño, renovación.
        </div>
        </div>
      </section>
    )
  }
}
export default JeuCv