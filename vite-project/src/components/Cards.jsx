/* eslint-disable react/prop-types */
import cardsData from '../data/cards';
import '../styles/Cards.css';
//import Gameboard from './Gameboard';/
import SingleCard from './SingleCard';

function Cards({ handleClick }) {


  const renderedCards = cardsData.map((card) => (
    <SingleCard
      src={`src/assets/img/${card.src}`}
      key={card.id}
      name={card.name}
      handleClick={handleClick}
      isClicked={card.isClicked}
      alt={card.name}
    ></SingleCard>
  ));

  return <div className="cards-container">{renderedCards}</div>;
}

export default Cards;
