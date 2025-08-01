import React from 'react'
import styles from './GamePlay.module.css'
import { useState } from 'react';
import Rules from '../rules/Rules';


const GamePlay = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [scoreColor, setScoreColor] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [isSelected, setIsSelected] = useState(false);
    const [toppedNumber, setToppedNumber] = useState(null);
    const [score, setScore] = useState(0);
    const [flag, setFlag] = useState(false)


    function generateNumber() {

        if (selectedNumber) {

            let newNumber = Math.floor(Math.random() * 6) + 1;
            setToppedNumber(newNumber);

            if (newNumber === selectedNumber) {
                setScore(prev => prev + 4)
                setScoreColor(styles.green)
            }
            else {
                setScore(prev => prev - 1)
                setScoreColor(styles.red)

            }
        }
        else {
            alert('Please select a number first')
        }
    }



    return (
        <>
            <nav>

                <div className={styles.score}>

                    <h1 className={scoreColor}>{score}</h1>
                    <p>Total Score</p>

                </div>


                <div >

                    <div className={styles.nums}>

                        {arrNumber.map((value, i) =>
                        (
                            <div key={i} className={(value === selectedNumber) ? styles.selected : styles.box}
                                onClick={() => {
                                    setSelectedNumber(value)

                                }}>{value}</div>
                        ))}

                    </div>

                    <p>Select Number</p>

                </div>

            </nav>
            <div className={styles.main}>

                <div className={styles.image}>

                    <img src={`./images/dice/dice_${toppedNumber ? toppedNumber : 1}.png`} alt="" onClick={generateNumber} />
                
                </div>

                <p>Click on Dice to roll</p>

                <button onClick={() => { setScore(0); setToppedNumber(null); setSelectedNumber(null); setScoreColor(null) }}>Reset Score</button>
                
                <button onClick={() => setFlag(prev => !prev)}>{flag ? `Hide rules` : `Show Rules`}</button>
                
                {flag && <Rules />}

            </div>
        </>
    )
}

export default GamePlay
