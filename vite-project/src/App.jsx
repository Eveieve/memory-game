/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState } from 'react';
import cardsData from './data/cards.js';
import shuffleArray from './utils/shuffle-cards.js';

function App() {
  const [cards, setCards] = useState(cardsData);
  console.log(cards);
  console.log(setCards);

  const [currentScore, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // handles SingleCard click
  function handleClick(e, id) {
    //when the card is clicked
    // AND when it's never been clicked
    // increment the currentScore by 1.
    console.log(e.target.name);
    if (e.target.dataset.isclicked === 'false') {
      setScore(currentScore + 1);
      console.log(currentScore);
      e.target.dataset.isclicked = 'true';
      // mix cards after each click
      shuffleArray(cardsData);
    } else {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setScore(0);
    }
  }

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setScore={setScore} bestScore={bestScore} />
      <Cards currentScore={currentScore} setScore={setScore} handleClick={handleClick} />
    </header>
  );
}

export default App;
