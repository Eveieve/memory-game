/* eslint-disable react/prop-types */
import './SingleCard.css';

function SingleCard({ singleCard, id, onClick, src }) {
  // Redefine handler for a click event using the passed down id
  function updateScore() {
    onClick(id);
  }

  return (
    <>
      <div className="card" onClick={updateScore}>
        <img src={src} alt={singleCard.title} />
        <p className="card-name">{singleCard.title.replace('GIF', '')}</p>
      </div>
    </>
  );
}

export default SingleCard;
