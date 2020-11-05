import React, { Component } from 'react'
import styles from '../components/Footer.module.scss'
import GitHubL from '../public/img/gitHubMark.png';
import GitHubR from '../public/img/gitHubW.png';
import linkedIn from '../public/img/LinkedIn_Logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a className={styles.minilogL} rel="preconnect" href="https://github.com/m1k431">
          <img src={GitHubL} alt="git"
            height="35" />
          <img src={GitHubR} alt="git" height="35" />
        </a>
        <a className={styles.minilogR} rel="preconnect" href="https://www.linkedin.com/in/mika%C3%ABl-garcia/">
          <img
            src={linkedIn} alt="linkedin" height="35" />
        </a>
      </footer>
    )
  }
}
export default Footer