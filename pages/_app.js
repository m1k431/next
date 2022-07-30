/* eslint-disable react/prop-types */
import "../styles/globals.css"
import "../styles/app.scss"
import "../styles/customBootstrap.scss"
import "../styles/pong.scss"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
