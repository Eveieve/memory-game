import cardsData from '../data/cards';
import '../styles/Cards.css';

function Cards() {
  // render cardsData array => to items
  // div is each card

  const renderedCards = cardsData.map((card) => (
    <div className="card" key={card.id}>
      {card.name}
    </div>
  ));

  return renderedCards;
}

export default Cards;
