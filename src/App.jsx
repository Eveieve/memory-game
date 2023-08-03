/* eslint-disable no-unused-vars */
import Cards from './components/Cards/Cards.jsx';
import Scoreboard from './components/Scoreboard/Scoreboard.jsx';
import { useState, useEffect } from 'react';
import { shuffleArray } from './utils/utils.js';

function App() {
  const [fetchedCards, setFetchedCards] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [isGameReset, setGameReset] = useState(false);
  // component renders first, then useEffect runs, setting the fetchedCards
  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&q=adventure time&limit=10', {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => setFetchedCards(data));
  }, [isGameReset]);

  if (!fetchedCards) {
    return <>Loading...</>;
  }

  function handleClick(clickedId) {
    const clickedCard = fetchedCards.data.find((card) => card.id === clickedId);

    if (clickedCard && clickedCard.isClicked === undefined) {
      setCurrentScore(() => currentScore + 1);
      clickedCard.isClicked = true;
      shuffleArray(fetchedCards.data);
    } else if (clickedCard && clickedCard.isClicked === true) {
      if (currentScore >= bestScore) {
        setGameReset((prevState) => !prevState);
        setBestScore(currentScore);
        setCurrentScore(0);
      } else {
        setGameReset((prevState) => !prevState);
        setCurrentScore(0);
      }
    }
  }

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Cards cards={fetchedCards} onClick={handleClick} />
    </header>
  );
}

export default App;
