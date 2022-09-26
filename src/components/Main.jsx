import React from "react";
import Die from "./Die";

export default function Main() {
    function getNewDice(numberOfDice) {
        const newDiceArr = []
        for (let i = 0; i < numberOfDice; i++) {
            newDiceArr.push(Math.ceil(Math.random() * 6))
        }
        return newDiceArr
    }

    const [dice, setDice] = React.useState(getNewDice(10))
    const diceElements = dice.map( die => <Die value={die} />)
    
    return (
        <main>
            <div className="dice--container">
                {diceElements}
            </div>
        </main>
    )
}