import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="form__input form__input_type_name"
        type="text"
        name="name"
        id="name"
        placeholder="Имя"
        value={name}
        onChange={handleNameChange}
        required
        minLength="2"
        maxLength="40"
      />
      <span className="form__error name-error"></span>
      <input
        className="form__input form__input_type_about"
        type="text"
        name="about"
        id="about"
        placeholder="О себе"
        value={description}
        onChange={handleDescriptionChange}
        required
        minLength="2"
        maxLength="200"
      />
      <span className="form__error about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
