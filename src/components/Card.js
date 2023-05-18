import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="photo__item">
      <button
        className="photo__trash"
        type="button"
        aria-label="Кнопка удаления"
      ></button>
      <img
        className="photo__card"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="photo__info">
        <h2 className="photo__title">{card.name}</h2>
        <div className="photo__like-container">
          <button
            className="photo__like"
            type="button"
            aria-label="Кнопка лайка"
          ></button>
          <span className="photo__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
