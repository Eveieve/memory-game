/* eslint-disable react/prop-types */
// import cardsData from '../data/cards';
import '../styles/Cards.css';
import SingleCard from './SingleCard';

function Cards({ cards, onClick }) {
  const renderedCards = cards.map((card) => (
    <SingleCard
      cards={cards}
      id={card.id}
      key={card.id}
      name={card.name}
      onClick={onClick}
      isClicked={card.isClicked}
      singleCard={card}
    ></SingleCard>
  ));

  return (
    <>
      <div className="cards-container">{renderedCards}</div>);
    </>
  );
}

export default Cards;
