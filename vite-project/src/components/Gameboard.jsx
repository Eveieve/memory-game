/* eslint-disable react-refresh/only-export-components */
// Gameboard shows the current score and the best score
import '../styles/Gameboard.css';

function Gameboard({ score, bestScore }) {
  return (
    <div className="gameboard-container">
      <div className="current-score">Current Score: {score}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
}

export default Gameboard;
