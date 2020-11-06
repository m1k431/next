import React, { Component } from 'react'
import VideoJ from '../public/img/theOneFinal.mp4'
import VideoPoster from '../public/img/kuansiFalls.jpg'
import styles from './Jonglage.module.scss'

class Jonglage extends Component {
  render() {
    return (
      <div id="Jonglage" className={styles.me}>
        <video className={styles.jonglage} autoPlay loop poster={VideoPoster} playsInline controls>
          <source src={VideoJ} type="video/mp4" />
        </video>
      </div>
    )
  }
}
export default Jonglage