/* eslint-disable react/prop-types */
// import cardsData from '../data/cards';
import './cards.css';
import SingleCard from '../Singlecard/SingleCard';

function Cards({ cards, onClick }) {
  const renderedCards = cards.data.map((card) => (
    <SingleCard
      cards={cards}
      id={card.id}
      key={card.id}
      name={card.name}
      onClick={onClick}
      isClicked={card.isClicked}
      singleCard={card}
      src={card.images.original.url}
    ></SingleCard>
  ));

  return (
    <>
      <div className="cards-container">{renderedCards}</div>
    </>
  );
}

export default Cards;
