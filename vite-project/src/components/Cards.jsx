import cardsData from '../data/cards';
import '../styles/Cards.css';

function Cards() {
  // render cardsData array => to items
  // div is each card

  const renderedCards = cardsData.map((card) => (
    <div className="card" key={card.id}>
      <img src={`public/assets/img/${card.src}`} alt={card.name} />
      <p>{card.name}</p>
    </div>
  ));

  return <div className="cards-container">{renderedCards}</div>;
}

export default Cards;
