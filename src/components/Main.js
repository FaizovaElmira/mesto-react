import React from 'react';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar
}) {

  return (
    <main>
      <section className="profile">
        <button className="profile__button profile__button_type_avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src="#" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button
            className="profile__button profile__button_type_edit"
            type="button"
            aria-label="Кнопка редактирования"
            onClick={onEditProfile}
          ></button>
          <p className="profile__about">Исследователь океана</p>
        </div>
        <button
          className="profile__button profile__button_type_add"
          type="button"
          aria-label="Кнопка добавления карточки"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="photo" aria-label="Галерея фотографий">
        <ul className="photo__container"></ul>
      </section>
    </main>
  );
}

export default Main;







