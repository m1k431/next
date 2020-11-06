//import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Jonglage from '../components/Jonglage'
import JeuCv from '../components/JeuCv'
import Soleil from '../components/soleil'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import Compteur from '../components/compteur'

const bienvenue = 'BIENVENUE DANS MON LABO DE DEV',
  welcome = 'WELCOME TO MY DEVLAB',
  moiFR = 'JE SUIS MIKAEL',
  moiUS = 'MY NAME IS MIKAEL',
  metierFR = 'INGENIEUR LOGICIEL IBM',
  metierUS = 'I AM AN IBM SOFTWARE ENGINEER',
  intro = 'THIS WEBSITE HOSTS MY EXPERIENCES AND SKILLS'

const paramParticles = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
  },
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 1
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
}

function HomePage() {
  return (
    <Layout>
      <Header />
      <Particles id='Particles' params={paramParticles} />
      <h1 className="titreh1 english">{welcome}</h1>
      <h1 className="titreh1 french">{welcome}</h1>
      <Jonglage />
      <h2 className="titreh2 english">{moiUS}</h2>
      <h2 className="titreh2 english">{metierUS}</h2>
      <h2 className="titreh2 french">{moiUS}</h2>
      <h2 className="titreh2 french">{metierUS}</h2>
      <JeuCv></JeuCv>
      <h2 className="titreh2">{intro}</h2>
      <Soleil />
      <Compteur />
      <Footer />
    </Layout>
  )
}

export default HomePage