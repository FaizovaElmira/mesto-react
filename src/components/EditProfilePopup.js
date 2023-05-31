import { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [description, setDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setErrorUsername("");
      setDescription(currentUser.about);
      setErrorDescription("");
      setIsValid(true);
    }
  }, [currentUser, isOpen]);

  function handleNameChange(event) {
    setName(event.target.value);
    setErrorUsername(event.target.validationMessage);
    setIsValid(event.target.validity.valid);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
    setErrorDescription(event.target.validationMessage);
    setIsValid(event.target.validity.valid);
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
      buttonText={buttonText}
      onSubmit={handleSubmit}
      isDisabledSubmitButton={!isValid}
    >
      <input
        className={`form__input ${errorUsername && "form__input_type_error"}`}
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
      <span className={`form__error ${errorUsername && "form__error_visible"}`}>
        {errorUsername}
      </span>
      <input
        className={`form__input ${
          errorDescription && "form__input_type_error"
        }`}
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
      <span
        className={`form__error ${errorDescription && "form__error_visible"}`}
      >
        {errorDescription}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
