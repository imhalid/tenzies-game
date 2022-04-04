import "./App.css";
import Die from "./Die";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(rollDice());
  const [tenzies, setTenzies] = useState(false);
  console.log(tenzies);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      <Confetti />;
    }
  }, [dice]);

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

  function handleClick() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setDice(rollDice());
      setTenzies(false);
    }
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

  function resetGame() {
    setDice(rollDice());
    setTenzies(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <main className="container">
          <h1 className="title">Tenzies</h1>
          <p className="instructions">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          {tenzies && <Confetti />}
          <div className="die-container">{diceElements}</div>
          <div className="buttons">
            {tenzies ? (
              <button onClick={resetGame} className="button-54">
                Reset Game
              </button>
            ) : (
              <button onClick={handleClick} className="button">
                Roll dice
              </button>
            )}
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
