import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Jonglage from '../components/Jonglage'
import JeuCv from '../components/JeuCv'
import Soleil from '../components/soleil'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'

const paramParticles = {
  fpsLimit: 60,
  backgroundMode: {
    enable: true,
    zIndex: -1
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
    <div className="App">
      <Header></Header>
      <Particles id='Particles' params={paramParticles} />
      <Jonglage></Jonglage>
      <JeuCv></JeuCv>
      <Soleil></Soleil>
      <Footer></Footer>
    </div>
  )
}

export default HomePage