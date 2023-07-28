/* eslint-disable react-refresh/only-export-components */
// Gameboard shows the current score and the best score
import '../styles/Gameboard.css';

function Gameboard() {
  return (
    <div className="gameboard-container">
      <div className="current-score">Current Score</div>
      <div className="best-score">Best Score</div>
    </div>
  );
}

export default Gameboard;
