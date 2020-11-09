/* eslint-disable react/react-in-jsx-scope */
import Header from '../components/Header'
import Jonglage from '../components/Jonglage'
import JeuCv from '../components/JeuCv'
import Soleil from '../components/soleil'
import Particles from 'react-particles-js'

export default function Home({
  welcome = 'WELCOME TO MY DEVLAB',
  moiUS = 'MY NAME IS MIKAEL',
  metierUS = 'I AM AN IBM SOFTWARE ENGINEER',
  intro = 'THIS WEBSITE HOSTS MY EXPERIENCES AND SKILLS',
  paramParticles = {
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
}) {
  return (
    <div>
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
    </div>
  )
}

export const getStaticProps = async () => {
  // This is a full server-side Node environment,
  // which means that you can make network requests,
  // talk to databases, read from the file-system,
  // and do whatever you want to fetch your data.

  return {
    props: {
      title: "My Amazing Startup",
      metaContent: "Amazing SEO poetry",
      copy:
        "I'm in the business of making people smile. That's all I'm here for.",
    },
    revalidate: 1,
  }
}