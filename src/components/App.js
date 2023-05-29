import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  function handleUpdateUser(user) {
    api
      .editUserInfo(user)
      .then((user) => {
        setCurrentUser({ name: user.name, about: user.about });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <input
            className="form__input form__input_type_avatar"
            type="url"
            name="avatar"
            id="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__error avatar-error"></span>
        </PopupWithForm>

        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          title="Новое место"
          name="add"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <input
            className="form__input form__input_type_title"
            type="text"
            name="title"
            id="title"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="form__error title-error"></span>
          <input
            className="form__input form__input_type_link"
            type="url"
            name="link"
            id="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="form__error link-error"></span>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
