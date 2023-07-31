/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState } from 'react';
import cardsData from './data/cards.js';

function App() {
  const [cards, setCards] = useState(cardsData);
  console.log(cards);
  console.log(setCards);

  const [currentScore, setScore] = useState(0);

  // handles SingleCard click
  function handleClick() {
    //when the card is clicked and it's never been clicked,
    // increment the currentScore by 1.
    setScore(currentScore + 1);
    console.log(currentScore);
  }

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setScore={setScore} />
      <Cards currentScore={currentScore} setScore={setScore} handleClick={handleClick} />
    </header>
  );
}

export default App;
