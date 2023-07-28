import { v4 as uuidv4 } from 'uuid';

// each card data must have an id
const cardsData = [
  { name: 'Princess Bubblegum', src: 'princessBubblegum.png', id: uuidv4() },
  { name: 'Jake', src: 'jake.png', id: uuidv4() },
  { name: 'Fin', src: 'fin.png', id: uuidv4() },
  { name: 'Cupcake', src: 'cupcake.png', id: uuidv4() },
  { name: 'Ice King', src: 'iceKing.png', id: uuidv4() },
  { name: 'Marceline', src: 'marceline.png', id: uuidv4() },
  { name: 'Lumpy Space Princess', src: 'lumpySpacePrincess.png', id: uuidv4() },
  { name: 'Bmo', src: 'bmo.png', id: uuidv4() },
  { name: 'Dancing Fin', src: 'dancingFin.png', id: uuidv4() },
  { name: 'Dancing Princess Bubblegum', src: 'dancingBubblegum.png', id: uuidv4() },
];

export default cardsData;
