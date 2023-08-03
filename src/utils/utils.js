// returns randomized array
export function shuffleArray(array) {
  let newArr = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return newArr;
}

export function resetCards(cards) {
  return cards.forEach((card) => (card.isClicked = false));
}
