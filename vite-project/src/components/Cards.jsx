/* eslint-disable react/prop-types */
import cardsData from '../data/cards';
import '../styles/Cards.css';
//import Gameboard from './Gameboard';/

function Cards({ handleScore }) {
  // render cardsData array => to items
  // div is each card
  console.log(handleScore);
  // when clicked and if it's never been clicked,
  // update current score +1 and
  // shuffle cards in random order

  // when clicked and if it's been clicked already,
  // end game => popup modal?
  // reset current score
  // set the previous current score as the best score
  // shuffle cards in random order

  const renderedCards = cardsData.map((card) => (
    <div className="card" key={card.id} onClick={handleScore}>
      <img src={`public/assets/img/${card.src}`} alt={card.name} />
      <p>{card.name}</p>
    </div>
  ));

  return <div className="cards-container">{renderedCards}</div>;
}

export default Cards;
