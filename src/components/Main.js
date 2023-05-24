import { useEffect, useState, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([user, card]) => {
        setCurrentUser(user);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(cardId) {
    api
      .deleteCard(cardId)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== cardId));
      })
      .catch((err) => console.log(err));
  }
  return (
    <main>
      <section className="profile">
        <button
          className="profile__button profile__button_type_avatar"
          onClick={onEditAvatar}
        >
          <img
            className="profile__avatar"
            alt="Аватар"
            src={currentUser.avatar}
          />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            className="profile__button profile__button_type_edit"
            type="button"
            aria-label="Кнопка редактирования"
            onClick={onEditProfile}
          ></button>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button
          className="profile__button profile__button_type_add"
          type="button"
          aria-label="Кнопка добавления карточки"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo" aria-label="Галерея фотографий">
        <ul className="photo__container">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
