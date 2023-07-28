import { v4 as uuidv4 } from 'uuid';

// each card data must have an id
const cardsData = [
  { name: 'Princess Bubblegum', isClicked: false, src: 'princessBubblegum.png', id: uuidv4() },
  { name: 'Jake', isClicked: false, src: 'jake.png', id: uuidv4() },
  { name: 'Fin', isClicked: false, src: 'fin.png', id: uuidv4() },
  { name: 'Cupcake', isClicked: false, src: 'cupcake.png', id: uuidv4() },
  { name: 'Ice King', isClicked: false, src: 'iceKing.png', id: uuidv4() },
  { name: 'Marceline', isClicked: false, src: 'marceline.png', id: uuidv4() },
  { name: 'Lumpy Space Princess', isClicked: false, src: 'lumpySpacePrincess.png', id: uuidv4() },
  { name: 'Bmo', isClicked: false, src: 'bmo.png', id: uuidv4() },
  { name: 'Dancing Fin', isClicked: false, src: 'dancingFin.png', id: uuidv4() },
  { name: 'Dancing Princess Bubblegum', isClicked: false, src: 'dancingBubblegum.png', id: uuidv4() },
];

export default cardsData;
