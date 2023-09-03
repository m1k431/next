/* eslint-disable react/prop-types */
import Header from "../components/Header"
//import Jonglage from "../components/Jonglage"
import JeuCv from "../components/JeuCv"
import Soleil from "../components/soleil"
//import Particles from "react-particles-js"
import LogoNextJs from "../public/img/nextJs.png"

export default function Home({
  welcome = "Welcome",
  welcomefr = "Bienvenue",
  moiUS = "I am Mikael",
  moiFR = "Je suis Mikael",
  metierUS = "IBMi and nodeJS developer",
  metierFR = "Développeur IBMi et nodeJS",
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
      { /* <Particles id="Particles" params={paramParticles} /> */}
      <Header />
      <h1 className="titreh2 english">{welcome}</h1>
      <h1 className="titreh2 french">{welcomefr}</h1>
      <h2 className="titreh2 english">{moiUS}</h2>
      <h2 className="titreh2 french">{moiFR}</h2>
      {/*<Jonglage />*/}
      <h2 className="titreh3 english">{metierUS}</h2>
      <h2 className="titreh3 french">{metierFR}</h2>
      <Soleil />
      <JeuCv />
      <br />
      <h2 className="titreh2 english">{outro}</h2>
      <h2 className="titreh2 french">{outroFR}</h2>
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
