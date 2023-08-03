/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState, useEffect } from 'react';
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
  // function fetchData()
  const [fetchedCards, setFetchedCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/search?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&q=cats&limit=5, { mode: 'cors' }",
      );
      const fetchedCards = await response.json();
      console.log(fetchedCards);
      const { data: extractedData } = fetchedCards;

      extractedData.forEach((card) => (card.isClicked = false));
      const { images } = extractedData;
      console.log(images);

      setFetchedCards(fetchedCards);
    }
    fetchData();
  }, []);

  //console.log(fetchData());

  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore} bestScore={bestScore} />
      <Cards cards={cards} currentScore={currentScore} setCurrentScore={setCurrentScore} onClick={handleClick} />
    </header>
  );
}

export default App;
