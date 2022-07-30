import React, { Component } from "react"
//import VideoJ from "../public/img/theOneFinal.mp4"
//import VideoPoster from "../public/img/kuansiFalls.jpg"
//import styles from "./Jonglage.module.scss"
import { Container, Row, Col } from "react-bootstrap"

class Jonglage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/* <video
              className={styles.jonglage}
              muted
              autoPlay
              loop
              poster={VideoPoster}
              playsInline
              controls
            >
              <source src={VideoJ} type="video/mp4" />
    </video> */ }
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Jonglage
