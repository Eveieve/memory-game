/* eslint-disable react/prop-types */
import '../styles/Cards.css';

function SingleCard({ src, alt, name, handleClick, isClicked }) {
  // console.log(isClicked);
  return (
    <>
      <div className="card" onClick={handleClick} data-isclicked={isClicked}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </div>
    </>
  );
}

export default SingleCard;
