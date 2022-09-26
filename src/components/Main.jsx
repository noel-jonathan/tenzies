import React from "react";
import { v4 as generateId } from "uuid";
import Die from "./Die";
import { useEffect } from "react";

export default function Main() {

    function getNewDice(numberOfDice) {
        const newDiceArr = []
        for (let i = 0; i < numberOfDice; i++) {
            newDiceArr.push(newDie())
        }
        return newDiceArr
    }

    function newDie() {
        return {
            value: (Math.ceil(Math.random() * 6)),
            isHeld: false,
            id: generateId()
        }
    }

    const [dice, setDice] = React.useState(getNewDice(10))
    const diceElements = dice.map( die =>
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld}
            holdDie={() => holdDie(die.id)}
        />)
    
    function btnClick() {
        setDice(oldDie => oldDie.map(die => {
            return die.isHeld ? die : newDie()
        }))
    }

    function holdDie(id) {
        setDice(oldDie => oldDie.map(die => {
            return die.id === id ?  
                {...die, isHeld: !die.isHeld} : die
        }))
    }

    useEffect( () => {
        const firstDieValue = dice[0].value
        setWonGame(!dice.some(die => !die.isHeld || die.value !== firstDieValue))
    }, [dice])

    function newGame() {
        setWonGame(false)
        setDice(getNewDice(10))
    }

    const [wonGame, setWonGame] = React.useState(false)

    return (
        <main className="center">
            <h1 className="title">Tenzies</h1> 
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice--container">
                {diceElements}
            </div>
            {!wonGame && <button className="center" onClick={btnClick}>Roll</button>}
            {wonGame && <p>Congratulations !</p>}
            {wonGame && <button className="center" onClick={newGame}>New Game ?</button>}
        </main>
    )
}