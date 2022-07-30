/* eslint-disable react/prop-types */
import Header from "../components/Header"
import Particles from "react-particles-js"
import Adhd from "../components/Adhd"

export default function Hyper({
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
      <Adhd />
    </>
  )
}
