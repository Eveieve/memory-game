/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState, useEffect } from 'react';
import cardsData from './data/cards.js';
import { shuffleArray, resetCards } from './utils/utils.js';
import { useParams } from 'react-router-dom';

function App() {
  const [fetchedCards, setFetchedCards] = useState();
  //const [cards, setCards] = useState(cardsData);

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // handles SingleCard click
  const { id } = useParams();

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&q=adventure time&limit=5', {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => setFetchedCards(data));
  }, [id]);

  if (fetchedCards === undefined) {
    return <>Still loading</>;
  } else {
    console.log(fetchedCards.data);
    fetchedCards.data.forEach((card) => (card.isClicked = false));
  }
  // loop through the array and check!
  function handleClick(clickedId) {
    console.log(fetchedCards.data);

    const clickedCard = fetchedCards.data.find((card) => card.id === clickedId);

    if (clickedCard && clickedCard.isClicked === false) {
      setCurrentScore(currentScore + 1);
      clickedCard.isClicked = true;
      shuffleArray(fetchedCards.data);
    } else if (clickedCard.isClicked === true) {
      if (currentScore >= bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      resetCards(fetchedCards.data);
    }
  }
  // function fetchData()

  //const [isLoading, setIsLoading] = useState(true);

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} />
      <Cards cards={fetchedCards} currentScore={currentScore} setCurrentScore={setCurrentScore} onClick={handleClick} />
    </header>
  );
}

export default App;
