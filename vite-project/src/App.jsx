/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState } from 'react';
import cardsData from './data/cards.js';
import { shuffleArray, resetCards } from './utils/utils.js';

function App() {
  const [cards, setCards] = useState(cardsData);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // handles SingleCard click

  // loop through the array and check!
  function handleClick(clickedId) {
    console.log(cards);

    const clickedCard = cards.find((card) => card.id === clickedId);

    if (clickedCard && clickedCard.isClicked === false) {
      setCurrentScore(currentScore + 1);
      clickedCard.isClicked = true;
      shuffleArray(cards);
    } else if (clickedCard.isClicked === true) {
      if (currentScore >= bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      resetCards(cards);
    }
  }

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} />
      <Cards cards={cards} currentScore={currentScore} setCurrentScore={setCurrentScore} onClick={handleClick} />
    </header>
  );
}

export default App;
