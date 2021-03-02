import React, { Component } from "react"
import Head from "next/head"
import { Nav, Navbar } from "react-bootstrap"
import GitHubL from "../public/img/gitHubMark.png"
import GitHubR from "../public/img/gitHubW.png"
import linkedIn from "../public/img/LinkedIn_Logo.svg"
import styles from "./Header.module.scss"

class Header extends Component {
  render() {
    const currentURL = "https://nextfolio.vercel.app",
      previewImage = "//nextfolio.vercel.app/ogimage.png"
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.8"
          />
          <title>My Javascript Portfolio</title>
          <meta name="description" content="My Javascript Portfolio" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta property="og:title" content="DEV Lab" key="ogtitle" />
          <meta property="og:type" content="article" />
          <meta
            property="og:description"
            content="My name is Mikael. I'm an IBM software engineer. This website hosts my projects, skills and experiences."
            key="ogdesc"
          />
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta
            property="og:image:secure_url"
            content={previewImage}
            key="ogimage"
          />
          <link rel="manifest" href="/mikael.webmanifest"></link>
        </Head>
        <Nav>
          <Navbar.Brand href="https://www.linkedin.com/in/mika%C3%ABl-garcia/">
            <img src={linkedIn} alt="linkedin" height="35" />
          </Navbar.Brand>
          <div className={styles.github}>
            <Navbar.Brand href="https://github.com/m1k431/next">
              <img src={GitHubL} alt="gitL" height="35" />
              <img src={GitHubR} alt="gitR" height="35" />
            </Navbar.Brand>
          </div>
        </Nav>
      </>
    )
  }
}
export default Header
