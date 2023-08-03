/* eslint-disable no-unused-vars */
import Cards from './components/Cards.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import { useState, useEffect } from 'react';
import { shuffleArray, resetCards } from './utils/utils.js';

function App() {
  const [fetchedCards, setFetchedCards] = useState();
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&q=adventure time&limit=10', {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => setFetchedCards(data));

    //console.log(fetchedCards.data);
  }, []);

  // async function fetchData() {
  //  const response = await  fetch('https://api.giphy.com/v1/gifs/search?api_key=7xX8bIMXFLppXyF7Kk7gpIM95xIHnZQK&q=adventure time&limit=10', {
  //   mode: 'cors',
  // })
  // const data = response.json();
  // return data;
  // }

  if (fetchedCards === undefined) {
    return <>Still loading</>;
  }

  // loop through the array and check!
  function handleClick(clickedId) {
    const clickedCard = fetchedCards.data.find((card) => card.id === clickedId);

    if (clickedCard && clickedCard.isClicked === false) {
      setCurrentScore(() => currentScore + 1);
      clickedCard.isClicked = true;
      console.log(clickedCard.isClicked);
      shuffleArray(fetchedCards.data);
      console.log(fetchedCards.data);
    } else if (clickedCard.isClicked === true) {
      if (currentScore >= bestScore) {
        setBestScore(currentScore);
        setCurrentScore(0);
        resetCards(fetchedCards.data);
      } else {
        setCurrentScore(0);
        resetCards(fetchedCards.data);
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
