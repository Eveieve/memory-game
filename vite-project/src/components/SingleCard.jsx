/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function SingleCard({ src, alt, name, handleClick }) {
  const updateScore = (id) => {
    handleClick(id);
  };
  return (
    <>
      <div className="card" onClick={updateScore}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default SingleCard;
