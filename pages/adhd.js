/* eslint-disable react/react-in-jsx-scope */
import Header from '../components/Header'
import Particles from 'react-particles-js'
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

function Hyper() {
  return (
    <div>
      <Header></Header>
      <Particles id='Particles' params={paramParticles} />
      <Adhd></Adhd>
    </div>
  )
}

export default Hyper