import React from 'react'
import styles from './startgame.module.css'


const Startgame = ({ toggle }) => {
  return (

    <container>

      <img src="./images/dices.png" alt="dices" />

      <div className={styles.right}>

        <h1 className={styles.name}>DICE GAME</h1>

        <button className={styles.btn} onClick={toggle}>Play Now</button>

      </div>

    </container>
  )
}

export default Startgame
