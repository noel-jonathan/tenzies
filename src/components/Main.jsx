import React from "react";
import Die from "./Die";

export default function Main() {
    function getNewDice(numberOfDice) {
        const newDiceArr = []
        for (let i = 0; i < numberOfDice; i++) {
            newDiceArr.push({
                value: (Math.ceil(Math.random() * 6)),
                isHeld: false
            })
        }
        return newDiceArr
    }

    const [dice, setDice] = React.useState(getNewDice(10))
    const diceElements = dice.map( die => <Die value={die.value} />)
    
    function handleClick() {
        setDice(getNewDice(10))
    }

    return (
        <main className="center">
            <div className="dice--container">
                {diceElements}
            </div>
            <button className="center" onClick={handleClick}>Roll</button>
        </main>
    )
}