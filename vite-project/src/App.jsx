import Cards from './components/Cards.jsx';
import Gameboard from './components/Gameboard.jsx';
import { useState } from 'react';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  function handleScore(isClicked) {
    // if already clicked, end game
    if (isClicked) {
      // endgame
      return;
    } else {
      setCurrentScore(currentScore + 1);
      console.log('Update Score!');
    }
  }

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Gameboard />
      <Cards handleScore={handleScore} />
    </header>
  );
}

export default App;
