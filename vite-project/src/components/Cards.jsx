import cardsData from '../data/cards.json';

function Cards() {
  // const { cards } = cardsData;

  console.log(cardsData);
  const [{ name, src }] = [cardsData];
  console.log({ name, src });
}

export default Cards;
