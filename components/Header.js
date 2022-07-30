import React, { Component } from "react"
import Head from "next/head"
import { Nav, Navbar } from "react-bootstrap"
import GitHubL from "../public/img/gitHubMark.png"
import GitHubR from "../public/img/gitHubW.png"
import linkedIn from "../public/img/LinkedIn_Logo.svg"

class Header extends Component {
  render() {
    const currentURL = "https://nextfolio.vercel.app",
      previewImage = "/ogimage.png"
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=0.8" />
          <title>My Javascript Portfolio</title>
          <meta name="description" content="My Javascript Portfolio" />
          {/*<link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Portfolio Mikael" key="ogtitle" />
          <meta property="og:description" content="My name is Mikael. I'm an IBM software engineer. This website hosts my projects, skills and experiences." />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <link rel="manifest" href="/mikael.webmanifest"></link>
        </Head>

        <Navbar bg="blue" variant="dark">
          <Navbar.Brand href="https://www.linkedin.com/in/mika%C3%ABl-garcia/">
            <img src={linkedIn} alt="linkedin" height="35" style={{ marginLeft: "10px"}} />
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/">Dev LAB</Nav.Link>
              {/* <Nav.Link href="/adhd">ADHD</Nav.Link> */}
              {/* <Nav.Link href="/pong">pongJS</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/m1k431/next">
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
