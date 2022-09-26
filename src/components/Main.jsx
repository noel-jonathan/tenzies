import Dice from "./Die";

export default function Main() {
    function allNewDice(numberOfDice) {
        const newDiceArr = []
        for (let i = 0; i < numberOfDice; i++) {
            diceArr.push(Math.ceil(Math.random() * 6))
        }
    }
    return (
        <main>
            <div className="dice--container">
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
                <Dice value= "1"/>
            </div>
        </main>
    )
}