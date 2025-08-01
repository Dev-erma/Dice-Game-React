import React from 'react'
import Styles from './rules.module.css'
const Rules = () => {
  return (
    <div className={Styles.container}>
      <p>+4 if your selected number comes on dice</p>
      <p>-1 if your selected number not comes on dice</p>
    </div>
  )
}

export default Rules
