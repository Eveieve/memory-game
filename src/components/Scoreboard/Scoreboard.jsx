/* eslint-disable react-refresh/only-export-components */
import './Scoreboard.css';
import PropTypes from 'prop-types';

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard-container">
      <div className="current-score">Current Score: {currentScore}</div>
      <div className="best-score">Best Score: {bestScore}</div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number,
  bestScore: PropTypes.number,
};

export default Scoreboard;
