import React, { Component } from 'react';
import Head from 'next/head'
import { Nav, Navbar } from 'react-bootstrap'
import GitHubL from '../public/img/gitHubMark.png';
import GitHubR from '../public/img/gitHubW.png';
import linkedIn from '../public/img/LinkedIn_Logo.svg';

class Header extends Component {
  render() {
    const currentURL = "https://www.mikael.ml",
      previewImage = "https://nextfolio.vercel.app/ogimage.png"
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=0.7" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="My Javascript Portfolio" />
          <meta property="og:title" content="DEV Lab" key="ogtitle" />
          <meta property="og:type" content="article" />
          <meta property="og:description" content="JS portfolio" key="ogdesc" />
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:image:secure_url" content={previewImage} key="ogimage" />
          <title>My Javascript Portfolio</title>
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
      </div>
    )
  }
}
export default Header;