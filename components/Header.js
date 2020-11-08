import styles from './Header.module.scss'
import React, { Component } from 'react';
import Head from 'next/head'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import GitHubL from '../public/img/gitHubMark.png';
import GitHubR from '../public/img/gitHubW.png';
import linkedIn from '../public/img/LinkedIn_Logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=0.7" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="My Javascript Portfolio" />
          <meta property="og:title" content="IBM RPG &amp; Javascript Developer" />
          <meta property="og:type" content="image" />
          <meta property="og:url" content="http://www.mikael.ml" />
          <meta property="og:image" content="/img/ogimage.png" />
          <meta property="og:description" content="My Javascript Portfolio" />
        </Head>

        <Navbar collapseOnSelect expand="sm" bg="blue" variant="dark">
          <Navbar.Brand href="https://www.linkedin.com/in/mika%C3%ABl-garcia/">
            <img src={linkedIn} alt="linkedin" height="35" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Dev LAB</Nav.Link>
              <Nav.Link href="/adhd">ADHD</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="https://github.com/m1k431">
                <img src={GitHubL} alt="git" height="35" />
                <img src={GitHubR} alt="git" height="35" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/*
        <nav className={styles.navBar}>
          <ul className={styles.ul}>
            <li className={styles.li}><a className={`css3buttonRed`} id="intro" rel="preconnect" href="/">Intro</a></li>
            <li className={styles.li}><a className={`css3button`} id="adhd" rel="preconnect" href="/adhd">ADHD</a></li>
            <li className={styles.li}><a className={`css3button`} id="leaflet" rel="preconnect" href="/api/highscore">ME</a></li>
          </ul>
        </nav>*/}
      </div>
    )
  }
}
export default Header;