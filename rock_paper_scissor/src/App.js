import React, { useState } from 'react';
import './App.scss';

function App() {
  const [selectedHand, setSelectedHand] = useState(null);
  const [computerHand, setComputerHand] = useState(null);
  const [score, setScore] = useState(0);

  const handOptions = [
    "fa-solid fa-hand-fist", 
    "fa-solid fa-hand", 
    "fa-solid fa-hand-scissors"
  ];

  const computerChoice = () => {
    const randomIndex = Math.floor(Math.random() * handOptions.length);
    return handOptions[randomIndex];
  };

  const decideWinner = (player, computer) => {
    if (player === computer) return 'tie';
    if (
      (player === "fa-solid fa-hand-fist" && computer === "fa-solid fa-hand-scissors") ||
      (player === "fa-solid fa-hand" && computer === "fa-solid fa-hand-fist") ||
      (player === "fa-solid fa-hand-scissors" && computer === "fa-solid fa-hand")
    ) {
      return 'player';
    }
    return 'computer';
  };

  const handleHandClick = (handClass) => {
    const computer = computerChoice();
    const winner = decideWinner(handClass, computer);
    setSelectedHand(handClass);
    setComputerHand(computer);

    if (winner === 'player') {
      setScore(score + 1);
    } else if (winner === 'computer') {
      setScore(score - 1);
    }
  };

  return (
    <div className="app">
      <div className='title'>Rock Paper Scissors</div>
      <div className='player'>
        <p>Player:</p>
        <div className='hand-sign'>
          <div className='rock' onClick={() => handleHandClick("fa-solid fa-hand-fist")}>
            <i className="fa-solid fa-hand-fist"></i>
          </div>
          <div className='scissor' onClick={() => handleHandClick("fa-solid fa-hand")}>
            <i className="fa-solid fa-hand"></i>
          </div>
          <div className='paper' onClick={() => handleHandClick("fa-solid fa-hand-scissors")}>
            <i className="fa-solid fa-hand-scissors"></i>
          </div>
        </div>
      </div>
      <div className='sign-choose'>
        <div className='player-choose'>
          <p>Player:</p>
          {selectedHand && (
            <i className={selectedHand}></i>
          )}
        </div>
        <div className='player-choose computer'>
          <p>Computer:</p>
          {computerHand && (
            <i className={computerHand}></i>
          )}
        </div>
      </div>
      <div className='scoreboard'>
        <p>Score:</p>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default App;
