import cardsData from '../data/cards';

function Cards() {
  // render cardsData array => to items
  // div is each card

  const renderedCards = cardsData.map((card) => <div key={card.id}>{card.name}</div>);

  return renderedCards;
}

export default Cards;
