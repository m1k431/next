import React, { Component } from 'react'
import VideoJ from '../public/img/theOneFinal.mp4'
import VideoPoster from '../public/img/kuansiFalls.jpg'
import styles from './Jonglage.module.scss'

class Jonglage extends Component {
  render() {
    const bienvenue = 'BIENVENUE DANS MON LABO DE DEV',
    welcome = 'WELCOME TO MY DEVLAB',
    moiFR = 'JE SUIS MIKAEL',
    metierFR = 'INGENIEUR LOGICIEL',
    moiUS = 'MY NAME IS MIKAEL',
    metierUS = 'I AM SOFTWARE ENGINEER'
    return (
      <section id="VideoJonglage" className={styles.me}>
        <h1 className="english">{welcome}</h1>
        <h1 className="french">{bienvenue}</h1>
        <video className={styles.jonglage} autoPlay loop poster={VideoPoster} playsInline controls>
          <source src={VideoJ} type="video/mp4"/>
        </video>
        <h2 className="english">{moiUS}</h2>
        <h2 className="english">{metierUS}</h2>
        <h2 className="french">{moiFR}</h2>
        <h2 className="french">{metierFR}</h2>
      </section>
    )
  }
}
export default Jonglage