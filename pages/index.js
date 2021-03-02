/* eslint-disable react/react-in-jsx-scope */
import Header from "../components/Header"
import Jonglage from "../components/Jonglage"
import JeuCv from "../components/JeuCv"
import Soleil from "../components/soleil"
import Particles from "react-particles-js"

export default function Home({
  welcome = "Welcome to my dev lab",
  welcomefr = "Welcome to my dev lab",
  moiUS = "My name is Mikael",
  moiFR = "Mon nom est Mikael",
  metierUS = "I am a developer",
  metierFR = "Je suis developpeur",
  intro = "This website hosts my experiences and skills",
  introFR = "Ce site web heberge mes experiences et competences",
  paramParticles = {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
    },
    particles: {
      number: {
        value: 80,
      },
      size: {
        value: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  },
}) {
  return (
    <>
      <Header />
      <Particles id="Particles" params={paramParticles} />
      <h1 className="titreh1 english">{welcome}</h1>
      <h1 className="titreh1 french">{welcomefr}</h1>
      <Jonglage />
      <h2 className="titreh1 english">{moiUS}</h2>
      <h2 className="titreh1 english">{metierUS}</h2>
      <h2 className="titreh1 french">{moiFR}</h2>
      <h2 className="titreh1 french">{metierFR}</h2>
      <JeuCv></JeuCv>
      <h2 className="titreh1 english">{intro}</h2>
      <h2 className="titreh1 french">{introFR}</h2>
      <Soleil />
    </>
  )
}

export async function getStaticProps() {
  // This is a full server-side Node environment,
  // which means that you can make network requests,
  // talk to databases, read from the file-system,
  // and do whatever you want to fetch your data.

  return {
    props: {},
    revalidate: 1,
  }
}
