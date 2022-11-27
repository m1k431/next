/* eslint-disable react/prop-types */
import Header from "../components/Header"
import Jonglage from "../components/Jonglage"
import JeuCv from "../components/JeuCv"
import Soleil from "../components/soleil"
//import Particles from "react-particles-js"
import LogoNextJs from "../public/img/nextJs.png"

export default function Home({
  welcome = "Welcome",
  welcomefr = "Bienvenue",
  moiUS = "I am Mikael",
  moiFR = "Je suis Mikael",
  metierUS = "IBM and JavaScript fullstack developer",
  metierFR = "Developpeur IBM et JavaScript fullstack",
  outro = "This website is made with",
  outroFR = "Ce site est fait avec"
  /*paramParticles = {
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
  },*/
}) {
  return (
    <>
      { /* <Particles id="Particles" params={paramParticles} /> */ }
      <Header />
      <br />
      <h1 className="titreh1 english">{welcome}</h1>
      <h1 className="titreh1 french">{welcomefr}</h1>
      <h2 className="titreh1 english">{moiUS}</h2>
      <h2 className="titreh1 french">{moiFR}</h2>
      <Jonglage />
      <h2 className="titreh1 english">{metierUS}</h2>
      <h2 className="titreh1 french">{metierFR}</h2>
      <JeuCv></JeuCv>
      <br />
      <a className="titreh1" href="https://github.com/m1k431/next/blob/master/components/soleil.js" style={{ textDecoration: "none" }}>
        <center>Programmation Objets</center>
      </a>
      <Soleil />
      <h2 className="titreh1 english">{outro}</h2>
      <h2 className="titreh1 french">{outroFR}</h2>
      <a href="https://nextjs.org/">
        <img src={LogoNextJs} alt="NextJS" height="35" style={{ width: "20%", marginLeft: "40%", height: "auto" }} />
      </a>
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
