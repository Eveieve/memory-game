/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function SingleCard({ src, alt, name, handleClick }) {
  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default SingleCard;
