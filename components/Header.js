import React, { Component } from "react"
import Head from "next/head"
import { Nav, Navbar } from "react-bootstrap"
import GitHubL from "../public/img/gitHubMark.png"
import GitHubR from "../public/img/gitHubW.png"
import linkedIn from "../public/img/LinkedIn_Logo.svg"

class Header extends Component {
  render() {
    const currentURL = "https://nextfolio.vercel.app",
      previewImage = "https://m1k431.netlify.app/img/ogimage.png"
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.8"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <title>My nextJs portfolio</title>
          <meta name="title" content="My nextJs portfolio" />
          <meta
            name="description"
            content="I switched from react to NextJs to test serverless functions"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentURL} />
          <meta property="og:title" content="My nextJs portfolio" />
          <meta
            property="og:description"
            content="I switched from react to NextJs to test serverless functions"
          />
          <meta property="og:image" content={previewImage} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={currentURL} />
          <meta property="twitter:title" content="My nextJs portfolio" />
          <meta
            property="twitter:description"
            content="I switched from react to NextJs to test serverless functions"
          />
          <meta property="twitter:image" content={previewImage} />
          <link rel="manifest" href="/mikael.webmanifest"></link>
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
              <Nav.Link href="/pong">pongJS</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="https://github.com/m1k431/next">
                <img src={GitHubL} alt="git" height="35" />
                <img src={GitHubR} alt="git" height="35" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
export default Header
