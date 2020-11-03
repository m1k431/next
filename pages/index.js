import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Jonglage from '../components/Jonglage'
import JeuCv from '../components/JeuCv'
import Soleil from '../components/soleil'

function HomePage() {
  return (
    <div className="App">
      <Jonglage></Jonglage>
      <JeuCv></JeuCv>
      <Soleil></Soleil>
    </div>
  )
}

export default HomePage