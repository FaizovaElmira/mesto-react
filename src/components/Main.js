import React from 'react';

function Main() {
  const handleEditAvatarClick = () => {
    const avatarPopup = document.querySelector('.popup_type_avatar');
    avatarPopup.classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    const editPopup = document.querySelector('.popup_type_edit');
    editPopup.classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    const addPopup = document.querySelector('.popup_type_add');
    addPopup.classList.add('popup_opened');
  };

  return (
    <main>
    <section class="profile">
      <button class="profile__button profile__button_type_avatar" onClick={handleEditAvatarClick}>
        <img class="profile__avatar" alt="Аватар" src="#" />
      </button>
      <div class="profile__info">
        <h1 class="profile__name">Жак-Ив Кусто</h1>
        <button
          class="profile__button profile__button_type_edit"
          type="button"
          aria-label="Кнопка редактирования"
          onClick={handleEditProfileClick}
        ></button>
        <p class="profile__about">Исследователь океана</p>
      </div>
      <button
        class="profile__button profile__button_type_add"
        type="button"
        aria-label="Кнопка добавления карточки"
        onClick={handleAddPlaceClick}
      ></button>
    </section>

    <section class="photo" aria-label="Галерея фотографий">
      <ul class="photo__container"></ul>
    </section>
  </main>
  );
}

export default Main;

