/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function SingleCard({ singleCard, id, onClick, src }) {
  // console.log(isClicked);
  function updateScore() {
    onClick(id);
  }
  return (
    <>
      <div className="card" onClick={updateScore}>
        <img src={src} alt={singleCard.title} />
        <p>{singleCard.title}</p>
      </div>
    </>
  );
}

export default SingleCard;
