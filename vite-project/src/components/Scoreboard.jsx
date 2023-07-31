/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import '../styles/Gameboard.css';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="gameboard-container">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
