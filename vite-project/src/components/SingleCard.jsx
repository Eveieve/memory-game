/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function SingleCard({ singleCard, id, onClick }) {
  // console.log(isClicked);
  function updateScore() {
    onClick(id);
  }
  return (
    <>
      <div className="card" onClick={updateScore}>
        <img src={`src/assets/img/${singleCard.src}`} alt={singleCard.alt} />
        <p>{singleCard.name}</p>
      </div>
    </>
  );
}

export default SingleCard;
