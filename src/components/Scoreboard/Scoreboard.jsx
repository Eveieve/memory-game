/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard-container">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
}

export default Scoreboard;
