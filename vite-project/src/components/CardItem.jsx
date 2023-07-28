/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function CardItem({ src, alt, name, handleScore }) {
  return (
    <>
      <div className="card" onClick={handleScore}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default CardItem;
