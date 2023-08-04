// import cardsData from '../data/cards';
import './cards.css';

import SingleCard from '../Singlecard/SingleCard';
import PropTypes from 'prop-types';

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

Cards.propTypes = {
  cards: PropTypes.array,
  onClick: PropTypes.function,
};

// practice defaultProps
/*Cards.defaultProps = {
  cards: [
    
  ]
}*/
export default Cards;
