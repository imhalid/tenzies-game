import "./App.css";
import Die from "./Die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  //create max 10 random numbers

  const [dice, setDice] = useState(rollDice());

  function rollDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  //button to roll dice
  function handleClick() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  function holdDie(id) {
    const newDice = [...dice];
    const die = newDice.find((die) => die.id === id);
    die.isHeld = !die.isHeld;
    setDice(newDice);
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={() => holdDie(die.id)}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <main className="container">
          <div className="die-container">{diceElements}</div>
          <button onClick={handleClick} className="roll-dice">
            Roll dice
          </button>
        </main>
      </header>
    </div>
  );
}

export default App;
