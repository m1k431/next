//import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Jonglage from '../components/Jonglage'
import JeuCv from '../components/JeuCv'
import Soleil from '../components/soleil'
import Particles from 'react-particles-js'
import Footer from '../components/Footer'
import Adhd from '../components/Adhd'

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
    <div className="App">
      <Header></Header>
      <Particles id='Particles' params={paramParticles} />
      <Adhd></Adhd>
      <Footer></Footer>
    </div>
  )
}

export default HomePage