import Cards from './components/Cards.jsx';
import Gameboard from './components/Gameboard.jsx';

function App() {
  return (
    <header className="header">
      <h1>Adventure Time Memory Game</h1>
      <Gameboard />
      <Cards />
    </header>
  );
}

export default App;
