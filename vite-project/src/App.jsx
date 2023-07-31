/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState } from 'react';
import cardsData from './data/cards.js';

function App() {
  const [currentScore, setScore] = useState(0);
const [cards, setCards] = useState(cardsData);
console.log(cards);
console.log(setCards);


  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setScore={setScore}/>
      <Cards currentScore = {currentScore} setScore = {setScore} />
    </header>
  );
}

export default App;
