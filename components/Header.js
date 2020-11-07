import React, { Component } from 'react';
import styles from './Header.module.scss'
import Head from 'next/head'

class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=0.8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="My Javascript Portfolio" />
          <meta property="og:title" content="IBM RPG &amp; Javascript Developer" />
          <meta property="og:type" content="image" />
          <meta property="og:url" content="http://www.mikael.ml" />
          <meta property="og:image" content="//m1k431react.herokuapp.com/img/ogImage.png" />
          <meta property="og:description" content="My Javascript Portfolio" />
        </Head>
        <nav className={styles.navBar}>
          <ul className={styles.ul}>
            <li className={styles.li}><a className={`css3buttonRed`} id="intro" rel="preconnect" href="/">Intro</a></li>
            <li className={styles.li}><a className={`css3button`} id="adhd" rel="preconnect" href="/adhd">ADHD</a></li>
            <li className={styles.li}><a className={`css3button`} id="leaflet" rel="preconnect" href="/api/highscore">ME</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Header;